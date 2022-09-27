// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { dataInvariants } from "data-invariants";
import { server } from "../../../server";
import { stringify } from "../../../core/utils";
import { init, Initializers } from "../../../core/test-helpers/mockerInit";
import { User, UserCreateInput, UserUpdateManyMutationInput } from "../types";
import UserGenerator from "./test-helpers/generator";

describe("User", () => {
  const variableFields: string[] = [
    "!**/id",
    "!**/createdAt",
    "!**/updatedAt",
    "!**/cart/userId",
  ];

  let initializers: Initializers;
  const cache: User[] = []; // cache for (create/update/find)One
  const many: User[] = []; // cache for (create/update/delete)Many
  const deleted: any[] = [];

  beforeAll(async () => {
    // unique seed for test suite (computed from model name)
    const seed = 2401644;
    const startTime = 0;
    const isSingleton = false;
    initializers = init({ seed, startTime, isSingleton });
  });

  test("createManyUser", async () => {
    const query = `
      mutation($data: createOneUserInput!) {
        createOneUser(data: $data) {
          id
          name
          username
          email
          createdAt
          updatedAt
          cart {
            id
            createdAt
            updatedAt
            user {
              id
              name
              username
              email
              createdAt
              updatedAt
            }
            userId
            items {
              id
              name
              price
              image
              createdAt
              updatedAt
            }
            coupon
          }
        },
      }`;

    const user = (await UserGenerator<UserCreateInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "delete", // only have required nested relationships, so we can delete it here
      trace: [],
    }))!.pop();

    const variables = {
      data: {
        nested: user,
      },
    };

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
      console.error(stringify({ loc: "createOneUser", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.createOneUser);
  });

  test("findManyUser", async () => {
    const query = `
      query(
       $where: UserWhereInput
       $orderBy: [UserOrderByWithRelationInput] 
       $cursor: UserWhereUniqueInput
       $take: Int
       $skip: Int
       $distinct: [UserScalarFieldEnum]
      ) {
        findManyUser(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
          distinct: $distinct
        ) {
          id
          name
          username
          email
          createdAt
          updatedAt
          cart {
            id
            createdAt
            updatedAt
            user {
              id
              name
              username
              email
              createdAt
              updatedAt
            }
            userId
            items {
              id
              name
              price
              image
              createdAt
              updatedAt
            }
            coupon
          }
          },
        }`;

    const variables = {
      // to prevent interference with other seed data
      // we only fetch the records created within this test
      where: {
        OR: [
          {
            id: {
              equals: many[0].id,
            },
          },
          {
            id: {
              equals: many[1].id,
            },
          },
        ],
      },
      orderBy: [{ id: "asc" }],
      skip: 0,
      take: 10,
    };

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
      console.error(stringify({ loc: "findManyUser", variables, result }));
      throw e;
    }
  });

  test("updateManyUser", async () => {
    const query = `
      mutation(
       $data: updateManyUserInput!
       $where: UserWhereInput!
      ) {
        updateManyUser(
          data: $data
          where: $where
        ) {
          count
        },
      }`;

    const user = (await UserGenerator<UserUpdateManyMutationInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "update",
      depth: 0,
      trace: [],
    }))!.pop();

    const variables = {
      where: {
        OR: [
          {
            id: {
              equals: many[0].id,
            },
          },
          {
            id: {
              equals: many[1].id,
            },
          },
        ],
      },
      data: {
        nestedMany: user,
      },
    };

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
      console.error(stringify({ loc: "updateManyUser", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.updateManyUser);
  });

  test("deleteManyUser", async () => {
    const query = `
      mutation(
       $where: UserWhereInput!
      ) {
        deleteManyUser(
          where: $where
        ) {
          count
        },
      }`;

    const variables = {
      where: {
        OR: [
          {
            id: {
              equals: many[0].id,
            },
          },
          {
            id: {
              equals: many[1].id,
            },
          },
        ],
      },
    };

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
      console.error(stringify({ loc: "deleteManyUser", variables, result }));
      throw e;
    }
  });
});
