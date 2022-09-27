// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import * as fs from "fs";
import { graphqlSchema } from "./graphqlSchema";

describe("graphqlSchema", () => {
  test("validate graphqlSchema", async () => {
    const schema = graphqlSchema();
    expect(schema).toBeTruthy();
    await fs.promises.mkdir("./schema", { recursive: true });
    await fs.promises.writeFile(
      "./schema/graphql.json",
      JSON.stringify(schema, null, 2),
      "utf8"
    );
  });
});
