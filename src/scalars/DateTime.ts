import { Kind, GraphQLError, GraphQLScalarType } from "graphql";
import isISO8601 from "validator/lib/isISO8601";

const validate = (value: string) => {
  const options = {
    strict: true,
    strictSeparator: true,
  };
  if (!isISO8601(value, options)) {
    throw new TypeError(`Invalid value. '${value}' is not of type 'DateTime'`);
  }

  return value;
};

export type DateTime = string;

export const GraphQLDateTime = /*#__PURE__*/ new GraphQLScalarType({
  name: "DateTime",
  description: [
    "Check if the string is a valid  [Prisma DateTime](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#default-value-for-a-datetime) ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), strict-mode date)",
    "`options` is an object which defaults to `{ strict: true, strictSeparator: false }`",
    "  `strict===true` => date strings with invalid dates like `2009-02-29` will be invalid",
    "  `strictSeparator===true` => date strings with date and time separated by anything other than a T will be invalid",
  ].join(""),

  serialize(value) {
    return validate(value.toISOString());
  },

  parseValue(value) {
    return new Date(validate(value));
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as DateTime but got '${ast.kind}'`
      );
    }
    const value = ast.value;
    return new Date(validate(value));
  },

  extensions: {
    codegenScalarType: "string",
  },
});

export default GraphQLDateTime;
