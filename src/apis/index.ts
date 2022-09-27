// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

const chalk = require("chalk");
import { GraphQLSchema } from "graphql";
import { graphqlSchema } from "./graphqlSchema";

const apis: readonly string[] = ["graphql"] as const;
type Apis = typeof apis[number];

export const defaultApi = "graphql";
export const testApi = "graphql";

export function getSchema(NV_API?: string) {
  const selected = getApiSelection(NV_API);
  const api = {
    graphql: graphqlSchema,
  }[selected] as () => GraphQLSchema;
  return api.call(null);
}

function getApiSelection(NV_API?: string): Apis {
  // only a single API is defined, so return it
  return apis[0];
}
