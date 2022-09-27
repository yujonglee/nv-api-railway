// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { dataInvariants } from "data-invariants";
import { server } from "../../../server";
import { stringify } from "../../../core/utils";
import { init, Initializers } from "../../../core/test-helpers/mockerInit";
import { Cart, CartCreateInput, CartUpdateManyMutationInput } from "../types";
import CartGenerator from "./test-helpers/generator";

describe("Cart", () => {
  const variableFields: string[] = [
    "!**/id",
    "!**/createdAt",
    "!**/updatedAt",
    "!**/userId",
  ];

  let initializers: Initializers;
  const cache: Cart[] = []; // cache for (create/update/find)One
  const many: Cart[] = []; // cache for (create/update/delete)Many
  const deleted: any[] = [];

  beforeAll(async () => {
    // unique seed for test suite (computed from model name)
    const seed = 1899836;
    const startTime = 0;
    const isSingleton = false;
    initializers = init({ seed, startTime, isSingleton });
  });

  test("createManyCart", async () => {
    const query = `
      mutation($data: createOneCartInput!) {
        createOneCart(data: $data) {
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
            cart {
              id
              createdAt
              updatedAt
              userId
              coupon
            }
          }
          userId
          items {
            id
            name
            price
            image
            createdAt
            updatedAt
            carts {
              id
              createdAt
              updatedAt
              userId
              coupon
            }
          }
          coupon
        },
      }`;

    const cart = (await CartGenerator<CartCreateInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "delete", // only have required nested relationships, so we can delete it here
      trace: [],
    }))!.pop();

    const variables = {
      data: {
        nested: cart,
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
      console.error(stringify({ loc: "createOneCart", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.createOneCart);
  });

  test("findManyCart", async () => {
    const query = `
      query(
       $where: CartWhereInput
       $orderBy: [CartOrderByWithRelationInput] 
       $cursor: CartWhereUniqueInput
       $take: Int
       $skip: Int
       $distinct: [CartScalarFieldEnum]
      ) {
        findManyCart(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
          distinct: $distinct
        ) {
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
            cart {
              id
              createdAt
              updatedAt
              userId
              coupon
            }
          }
          userId
          items {
            id
            name
            price
            image
            createdAt
            updatedAt
            carts {
              id
              createdAt
              updatedAt
              userId
              coupon
            }
          }
          coupon
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
      console.error(stringify({ loc: "findManyCart", variables, result }));
      throw e;
    }
  });

  test("updateManyCart", async () => {
    const query = `
      mutation(
       $data: updateManyCartInput!
       $where: CartWhereInput!
      ) {
        updateManyCart(
          data: $data
          where: $where
        ) {
          count
        },
      }`;

    const cart = (await CartGenerator<CartUpdateManyMutationInput>({
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
        nestedMany: cart,
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
      console.error(stringify({ loc: "updateManyCart", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.updateManyCart);
  });

  test("deleteManyCart", async () => {
    const query = `
      mutation(
       $where: CartWhereInput!
      ) {
        deleteManyCart(
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
      console.error(stringify({ loc: "deleteManyCart", variables, result }));
      throw e;
    }
  });
});
