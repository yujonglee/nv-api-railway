// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

// Converts a generated mock data into valid GraphQL data
// - stringifies Dates to ISOStrings.
export default function graphqlize(
  obj: Record<string, unknown>,
  isGraphQL: boolean
): Record<string, unknown> {
  return isGraphQL
    ? (() => {
        const result: Record<string, unknown> = {};

        for (const [key, value] of Object.entries(obj)) {
          result[key] =
            value instanceof Date ? (value as Date).toISOString() : value;
        }
        return result;
      })()
    : obj;
}
