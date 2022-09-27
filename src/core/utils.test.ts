// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { stringify } from "./utils";

describe("Utils", () => {
  test("stringify", () => {
    const input = {
      b: BigInt(1),
      i: 1,
      bool: true,
      str: "str",
      arr: [1, 2, 3],
      o: {
        a: 1,
        b: 2,
      },
    };
    const output = stringify(input);
    expect(output).toMatchInlineSnapshot();
  });
});
