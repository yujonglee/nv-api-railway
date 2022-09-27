import { Kind } from "graphql";
import { GraphQLEmail } from "./Email";

describe("Email", () => {
  describe("valid", () => {
    const validValues = ["foo@bar.com"];

    validValues.forEach((valid) => {
      it(`parse & serialize '${valid}'`, () => {
        const parsed = GraphQLEmail.parseValue(valid);
        const serialized = GraphQLEmail.serialize(parsed);
        expect(serialized).toEqual(valid);
      });

      it(`parseLiteral '${valid}'`, () => {
        const result = GraphQLEmail.parseLiteral(
          {
            value: valid,
            kind: Kind.STRING,
          },
          {}
        );
        expect(GraphQLEmail.serialize(result)).toEqual(valid);
      });
    });
  });

  describe("invalid", () => {
    const invalidValues = ["invalid-email@"];

    invalidValues.forEach((invalid) => {
      it(`parseValue & serialize '${invalid}'`, () => {
        expect(() => {
          const parsed = GraphQLEmail.parseValue(invalid);
          const serialized = GraphQLEmail.serialize(parsed);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseLiteral 'typeError'`, () => {
        expect(() => {
          const result = GraphQLEmail.parseLiteral(
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
