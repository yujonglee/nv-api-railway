import { Kind } from "graphql";
import { GraphQLJson } from "./Json";

describe("Json", () => {
  describe("valid", () => {
    const validValues = ['{"key":"value"}'];
    validValues.forEach((valid) => {
      it(`parse & serialize '${valid}'`, () => {
        const parsed = GraphQLJson.parseValue(valid);
        const serialized = GraphQLJson.serialize(parsed);
        expect(serialized.replace(/s/g, "")).toEqual(valid.replace(/s/g, ""));
      });
      it(`parseLiteral '${valid}'`, () => {
        const result = GraphQLJson.parseLiteral(
          { value: valid, kind: Kind.STRING },
          {}
        );
        expect(GraphQLJson.serialize(result).replace(/s/g, "")).toEqual(
          valid.replace(/s/g, "")
        );
      });
    });
  });
  describe("invalid", () => {
    const invalidValues = ["true", false];
    invalidValues.forEach((invalid) => {
      it(`parse & serialize '${invalid}'`, () => {
        expect(() => {
          GraphQLJson.parseValue(invalid);
        }).toThrow();
      });
      it(`parseLiteral '${invalid}'`, () => {
        expect(() => {
          GraphQLJson.parseLiteral(
            { value: invalid as boolean, kind: Kind.BOOLEAN },
            {}
          );
        }).toThrow();
      });
    });
  });
});
