// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { server } from "../server";
import { stringify } from "./utils";
import { dataInvariants } from "data-invariants";

describe("core", () => {
  test("health - shallow", async () => {
    const query = `
      query(
        $level: nvHealthCheckEnum,
      ) {
        health(level: $level)
      }
    `;

    const variables = {
      level: "shallow",
    };

    const variableFields: string[] = [];
    const result = await server.executeOperation({
      query,
      variables,
    });

    try {
      expect(
        dataInvariants(result.data as any, variableFields)
      ).toMatchSnapshot();
      expect(result.errors).toBeUndefined();
      expect(result.data).toBeTruthy();
    } catch (e) {
      console.error(stringify({ loc: "health - shallow", variables, result }));
      throw e;
    }
  });

  test("health - normal", async () => {
    const query = `
      query(
        $level: nvHealthCheckEnum,
      ) {
        health(level: $level)
      }
    `;

    const variables = {
      level: "normal",
    };

    const variableFields: string[] = [];
    const result = await server.executeOperation({
      query,
      variables,
    });

    try {
      expect(
        dataInvariants(result.data as any, variableFields)
      ).toMatchSnapshot();
      expect(result.errors).toBeUndefined();
      expect(result.data).toBeTruthy();
    } catch (e) {
      console.error(stringify({ loc: "health - normal", variables, result }));
      throw e;
    }
  });

  test("health - deep", async () => {
    const query = `
      query(
        $level: nvHealthCheckEnum,
      ) {
        health(level: $level)
      }
    `;

    const variables = {
      level: "deep",
    };

    const variableFields: string[] = [];
    const result = await server.executeOperation({
      query,
      variables,
    });

    try {
      expect(
        dataInvariants(result.data as any, variableFields)
      ).toMatchSnapshot();
      expect(result.errors).toBeUndefined();
      expect(result.data).toBeTruthy();
    } catch (e) {
      console.error(stringify({ loc: "health - deep", variables, result }));
      throw e;
    }
  });
  test("noop", async () => {
    const query = `
      mutation(
        $input: Int,
      ) {
        noop(input: $input)
      }
    `;

    const variables = {
      input: 42,
    };

    const result = await server.executeOperation({
      query,
      variables,
    });

    try {
      expect(result.data).toMatchSnapshot();
      expect(result.errors).toBeUndefined();
      expect(result.data).toBeTruthy();
    } catch (e) {
      console.error(stringify({ loc: "noop", variables, result }));
      throw e;
    }
  });
});
