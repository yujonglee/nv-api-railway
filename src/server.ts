//
// Modify to suit Application needs.
//

import * as fs from "fs";
import { PrismaSelect } from "@paljs/plugins";
import { PrismaClient } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { envelop, useSchema } from "@envelop/core";
import {
  useExtendedValidation,
  OneOfInputObjectsRule,
} from "@envelop/extended-validation";
import { ApolloServer } from "apollo-server-micro";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { send } from "micro";
import cors from "micro-cors";
import httpProxy from "http-proxy";

import { Context, undoOneOf } from "./core/utils";
import { epilogue } from "./core/epilogue";
import { getSchema, defaultApi, testApi } from "./apis";

const inDev = ["dev", "development", "test"].includes(
  /* istanbul ignore next */
  process.env.NODE_ENV ?? "production"
);

const middleware = async (
  resolve: any,
  root: any,
  args: any,
  context: Context,
  info: GraphQLResolveInfo
) => {
  // extract selected fields from the GraphQL query
  const select = new PrismaSelect(info).value;
  if (!!select && Object.keys(select).length > 0) {
    args = {
      // undoes the @oneOf transformation
      ...undoOneOf(args),
      ...select,
    };
  }
  return resolve(root, args, context, info);
};

// istanbul ignore next
const NV_API = process.env.NV_API
  ? process.env.NV_API // 1sr priority when specified
  : /^(test|dev)/i.test(process.env.NODE_ENV ?? "production")
  ? testApi // test & dev
  : defaultApi; // is undefined when more than one API specified

const schema = applyMiddleware(getSchema(NV_API), middleware);

const getEnveloped = envelop({
  plugins: [
    useExtendedValidation({
      rules: [OneOfInputObjectsRule],
    }),
    useSchema(schema),
  ],
});

const context: Context = {
  prisma: new PrismaClient(),
};

export const server = new ApolloServer({
  context,
  schema,
  plugins: [
    /* istanbul ignore next */
    inDev
      ? ApolloServerPluginLandingPageLocalDefault({ footer: false })
      : ApolloServerPluginLandingPageProductionDefault({ footer: false }),
  ],
  executor: async (requestContext) => {
    const { schema, execute, contextFactory } = getEnveloped({
      req: requestContext.request.http,
    });

    return execute({
      schema,
      document: requestContext.document,
      contextValue: { ...(await contextFactory()), ...context },
      variableValues: requestContext.request.variables,
      operationName: requestContext.operationName,
    });
  },
});

const index = fs.readFileSync(`${__dirname}/../public/index.html`, "utf8");
const graphiql = fs.readFileSync(
  `${__dirname}/../public/graphiql.html`,
  "utf8"
);
const css = fs.readFileSync(`${__dirname}/../public/output.css`, "utf8");
/* istanbul ignore next */
const loadCoverageFile = (reqUrl: string) => {
  return fs.readFileSync(
    reqUrl.replace(/^\/coverage/, `${__dirname}/../coverage/lcov-report`),
    "utf8"
  );
};

// the proxy serves prisma-studio (on repl.it)
const proxy = httpProxy.createProxyServer({ target: "http://localhost:5555" });

export default server.start().then(() => {
  const handler = server.createHandler();
  /* istanbul ignore next */
  {
    return cors()(
      (req, res) =>
        req.method === "OPTIONS"
          ? send(res, 200, "ok")
          : inDev
          ? req.url === "/"
            ? send(res, 200, index)
            : req.url === "/output.css"
            ? (() => {
                res.setHeader("Content-Type", "text/css");
                send(res, 200, css);
              })()
            : req.url === "/graphiql"
            ? (() => {
                res.setHeader("Content-Type", "text/html; charset=UTF-8");
                send(res, 200, graphiql);
              })()
            : req.url?.startsWith("/graphql")
            ? handler(req, res)
            : req.url?.startsWith("/coverage")
            ? (() => {
                try {
                  if (req.url.endsWith("css")) {
                    res.setHeader("Content-Type", "text/css");
                  }
                  const contents = loadCoverageFile(req.url);
                  send(res, 200, contents);
                } catch (e) {
                  send(
                    res,
                    404,
                    "No coverage data found.\nPlease run 'npm run test' and retry."
                  );
                }
              })()
            : (() => {
                // proxy to the prisma server.
                req.url = req.url?.replace("/prisma/", "");
                return proxy.web(req, res);
              })()
          : handler(req, res) // production mode
    );
  }
});

// exit gracefully
epilogue();
