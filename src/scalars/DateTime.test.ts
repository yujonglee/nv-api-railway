import { Kind } from "graphql";
import { GraphQLDateTime } from "./DateTime";

describe("DateTime", () => {
  describe("valid", () => {
    const validValues = ["2010-02-18T22:23:48.300Z"];

    validValues.forEach((valid) => {
      it(`parse & serialize '${valid}'`, () => {
        const parsed = GraphQLDateTime.parseValue(valid);
        const serialized = GraphQLDateTime.serialize(parsed);
        expect(serialized).toEqual(valid);
      });

      it(`parseLiteral '${valid}'`, () => {
        const result = GraphQLDateTime.parseLiteral(
          {
            value: valid,
            kind: Kind.STRING,
          },
          {}
        );
        expect(GraphQLDateTime.serialize(result)).toEqual(valid);
      });
    });
  });

  describe("invalid", () => {
    const invalidValues = ["abc"];

    invalidValues.forEach((invalid) => {
      it(`parseValue & serialize '${invalid}'`, () => {
        expect(() => {
          const parsed = GraphQLDateTime.parseValue(invalid);
          const serialized = GraphQLDateTime.serialize(parsed);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseLiteral 'typeError'`, () => {
        expect(() => {
          const result = GraphQLDateTime.parseLiteral(
            {
              value: "some value",
              kind: Kind.INT,
            },
            {}
          );
        }).toThrow(/an only validate strings as.*but got 'IntValue'/);
      });
    });
  });
});
