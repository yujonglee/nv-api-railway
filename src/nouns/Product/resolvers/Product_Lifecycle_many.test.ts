// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { dataInvariants } from "data-invariants";
import { server } from "../../../server";
import { stringify } from "../../../core/utils";
import { init, Initializers } from "../../../core/test-helpers/mockerInit";
import {
  Product,
  ProductCreateInput,
  ProductUpdateManyMutationInput,
} from "../types";
import ProductGenerator from "./test-helpers/generator";

describe("Product", () => {
  const variableFields: string[] = [
    "!**/id",
    "!**/createdAt",
    "!**/updatedAt",
    "!**/carts/*/userId",
  ];

  let initializers: Initializers;
  const cache: Product[] = []; // cache for (create/update/find)One
  const many: Product[] = []; // cache for (create/update/delete)Many
  const deleted: any[] = [];

  beforeAll(async () => {
    // unique seed for test suite (computed from model name)
    const seed = 1053376242;
    const startTime = 0;
    const isSingleton = false;
    initializers = init({ seed, startTime, isSingleton });
  });

  test("createManyProduct", async () => {
    const query = `
      mutation($data: createOneProductInput!) {
        createOneProduct(data: $data) {
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

    const product = (await ProductGenerator<ProductCreateInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "delete", // only have required nested relationships, so we can delete it here
      trace: [],
    }))!.pop();

    const variables = {
      data: {
        nested: product,
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
      console.error(stringify({ loc: "createOneProduct", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.createOneProduct);
  });

  test("findManyProduct", async () => {
    const query = `
      query(
       $where: ProductWhereInput
       $orderBy: [ProductOrderByWithRelationInput] 
       $cursor: ProductWhereUniqueInput
       $take: Int
       $skip: Int
       $distinct: [ProductScalarFieldEnum]
      ) {
        findManyProduct(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
          distinct: $distinct
        ) {
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
      console.error(stringify({ loc: "findManyProduct", variables, result }));
      throw e;
    }
  });

  test("updateManyProduct", async () => {
    const query = `
      mutation(
       $data: updateManyProductInput!
       $where: ProductWhereInput!
      ) {
        updateManyProduct(
          data: $data
          where: $where
        ) {
          count
        },
      }`;

    const product = (await ProductGenerator<ProductUpdateManyMutationInput>({
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
        nestedMany: product,
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
      console.error(stringify({ loc: "updateManyProduct", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.updateManyProduct);
  });

  test("deleteManyProduct", async () => {
    const query = `
      mutation(
       $where: ProductWhereInput!
      ) {
        deleteManyProduct(
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
      console.error(stringify({ loc: "deleteManyProduct", variables, result }));
      throw e;
    }
  });
});
