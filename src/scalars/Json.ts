import { Prisma } from "@prisma/client";
import { Kind, GraphQLError, GraphQLScalarType } from "graphql";
import isJSON from "validator/lib/isJSON";
import { stringify } from "../core/utils";

const validate = (value: string) => {
  if (!isJSON(value)) {
    throw new TypeError(`Invalid value. '${value}' is not of type 'Json'`);
  }

  return value;
};

export type Json = Prisma.JsonValue;

export const GraphQLJson = /*#__PURE__*/ new GraphQLScalarType({
  name: "Json",
  description: "Check if the string is valid JSON (note: uses JSON.parse)",

  serialize(value) {
    return validate(stringify(value));
  },

  parseValue(value) {
    return JSON.parse(validate(value)) as Prisma.JsonValue;
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as Json but got '${ast.kind}'`
      );
    }
    const value = ast.value;
    return JSON.parse(validate(value)) as Prisma.JsonValue;
  },

  extensions: {
    codegenScalarType: "string",
  },
});

export default GraphQLJson;
