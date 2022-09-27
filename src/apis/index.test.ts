// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { getSchema } from "./index";

describe(`getSchema`, () => {
  test(`getSchema success`, async () => {
    const schema = await getSchema("graphql");
    expect(typeof schema).toMatchInlineSnapshot(`"object"`);
  });
});
