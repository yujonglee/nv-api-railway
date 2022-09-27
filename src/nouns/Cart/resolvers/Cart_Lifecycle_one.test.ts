// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { dataInvariants } from "data-invariants";
import { server } from "../../../server";
import { stringify } from "../../../core/utils";
import { init, Initializers } from "../../../core/test-helpers/mockerInit";
import { Cart, CartCreateInput, CartUpdateInput } from "../types";
import CartGenerator from "./test-helpers/generator";
import { createForDelete } from "./test-helpers/utils";

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

  test("createOneCart", async () => {
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

  test("findFirstCart", async () => {
    const query = `
      query(
       $where: CartWhereInput!
      ) {
        findFirstCart(
          where: $where
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
      where: {
        id: {
          equals: cache[0].id,
        },
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
      console.error(stringify({ loc: "findFirstCart", variables, result }));
      throw e;
    }
  });

  test("updateOneCart", async () => {
    const query = `
      mutation(
       $data: updateOneCartInput!
       $where: CartWhereUniqueInput!
      ) {
        updateOneCart(
          data: $data
          where: $where
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

    const cart = (await CartGenerator<CartCreateInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "update",
      trace: [],
    }))!.pop();

    const variables = {
      where: {
        id: cache[0].id,
      },
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
      console.error(stringify({ loc: "updateOneCart", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.updateOneCart);
  });

  test("findUniqueCart", async () => {
    const query = `
      query(
       $where: CartWhereUniqueInput!
      ) {
        findUniqueCart(
          where: $where
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
      where: {
        id: cache[1].id,
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
      console.error(stringify({ loc: "findUniqueCart", variables, result }));
      throw e;
    }
  });

  test("upsertOneCart", async () => {
    const instance = await createForDelete(initializers)!;
    const query = `
      mutation(
       $where: CartWhereUniqueInput!
       $create: createOneCartInput!
       $update: updateOneCartInput!
      ) {
        upsertOneCart(
          where: $where
          create: $create
          update: $update
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

    const cart = (await CartGenerator<CartCreateInput, CartUpdateInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "upsert",
      trace: [],
    }))!.pop() as { create: CartCreateInput; update: CartUpdateInput };

    const variables = {
      where: {
        id: instance.id,
      },
      create: {
        nested: cart.create,
      },
      update: {
        nested: cart.update,
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
      console.error(stringify({ loc: "upsertOneCart", variables, result }));
      throw e;
    }
  });

  test("aggregateCart", async () => {
    const query = `
      query(
       $where: CartWhereInput
       $orderBy: [CartOrderByWithRelationInput] 
       $cursor: CartWhereUniqueInput
       $take: Int
       $skip: Int
      ) {
        aggregateCart(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
        ) {
          _count {
            id
            createdAt
            updatedAt
            userId
            coupon
            _all
          }
          _min {
            id
            createdAt
            updatedAt
            userId
            coupon
          }
          _max {
            id
            createdAt
            updatedAt
            userId
            coupon
          }
        },
      }`;

    const variables = {
      where: {
        id: {
          equals: cache[1].id,
        },
      },
      // orderBy: [],
      skip: 0,
      // take: 10,
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
      console.error(stringify({ loc: "aggregateCart", variables, result }));
      throw e;
    }
  });

  test("groupByCart", async () => {
    const query = `
      query(
        $where: CartWhereInput
        $orderBy: [CartOrderByWithAggregationInput]
        $by: [CartScalarFieldEnum]!
        $having: CartScalarWhereWithAggregatesInput
        $take: Int
        $skip: Int
      ) {
        groupByCart(
          where: $where
          orderBy: $orderBy
          by: $by
          having: $having
          take: $take
          skip: $skip
        ) {
          id
          createdAt
          updatedAt
          userId
          coupon
          _count {
            id
            createdAt
            updatedAt
            userId
            coupon
            _all
          }
          _min {
            id
            createdAt
            updatedAt
            userId
            coupon
          }
          _max {
            id
            createdAt
            updatedAt
            userId
            coupon
          }
        },
      }`;

    const variables = {
      where: {
        id: {
          equals: cache[1].id,
        },
      },
      // orderBy: [],
      by: ["id", "createdAt", "updatedAt", "userId", "coupon"],
      skip: 0,
      // take: 10,
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
      console.error(stringify({ loc: "groupByCart", variables, result }));
      throw e;
    }
  });

  test("deleteOneCart", async () => {
    const query = `
      mutation(
       $where: CartWhereUniqueInput!
      ) {
        deleteOneCart(
          where: $where
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
      where: {
        id: cache[1].id,
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
      console.error(stringify({ loc: "deleteOneCart", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.deleteOneCart);
  });

  test("aggregateCart", async () => {
    const query = `
      query(
       $where: CartWhereInput
       $orderBy: [CartOrderByWithRelationInput] 
       $cursor: CartWhereUniqueInput
       $take: Int
       $skip: Int
      ) {
        aggregateCart(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
        ) {
          _count {
            id
            createdAt
            updatedAt
            userId
            coupon
            _all
          }
          _min {
            id
            createdAt
            updatedAt
            userId
            coupon
          }
          _max {
            id
            createdAt
            updatedAt
            userId
            coupon
          }
        },
      }`;

    const variables = {
      where: {
        id: {
          equals: cache[1].id,
        },
      },
      // orderBy: [],
      skip: 0,
      // take: 10,
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
      console.error(stringify({ loc: "aggregateCart", variables, result }));
      throw e;
    }
  });
});
