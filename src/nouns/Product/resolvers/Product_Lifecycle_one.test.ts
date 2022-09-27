// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { dataInvariants } from "data-invariants";
import { server } from "../../../server";
import { stringify } from "../../../core/utils";
import { init, Initializers } from "../../../core/test-helpers/mockerInit";
import { Product, ProductCreateInput, ProductUpdateInput } from "../types";
import ProductGenerator from "./test-helpers/generator";
import { createForDelete } from "./test-helpers/utils";

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

  test("createOneProduct", async () => {
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

  test("findFirstProduct", async () => {
    const query = `
      query(
       $where: ProductWhereInput!
      ) {
        findFirstProduct(
          where: $where
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
      console.error(stringify({ loc: "findFirstProduct", variables, result }));
      throw e;
    }
  });

  test("updateOneProduct", async () => {
    const query = `
      mutation(
       $data: updateOneProductInput!
       $where: ProductWhereUniqueInput!
      ) {
        updateOneProduct(
          data: $data
          where: $where
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

    const product = (await ProductGenerator<ProductCreateInput>({
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
      console.error(stringify({ loc: "updateOneProduct", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.updateOneProduct);
  });

  test("findUniqueProduct", async () => {
    const query = `
      query(
       $where: ProductWhereUniqueInput!
      ) {
        findUniqueProduct(
          where: $where
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
      console.error(stringify({ loc: "findUniqueProduct", variables, result }));
      throw e;
    }
  });

  test("upsertOneProduct", async () => {
    const instance = await createForDelete(initializers)!;
    const query = `
      mutation(
       $where: ProductWhereUniqueInput!
       $create: createOneProductInput!
       $update: updateOneProductInput!
      ) {
        upsertOneProduct(
          where: $where
          create: $create
          update: $update
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

    const product = (await ProductGenerator<
      ProductCreateInput,
      ProductUpdateInput
    >({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "upsert",
      trace: [],
    }))!.pop() as { create: ProductCreateInput; update: ProductUpdateInput };

    const variables = {
      where: {
        id: instance.id,
      },
      create: {
        nested: product.create,
      },
      update: {
        nested: product.update,
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
      console.error(stringify({ loc: "upsertOneProduct", variables, result }));
      throw e;
    }
  });

  test("aggregateProduct", async () => {
    const query = `
      query(
       $where: ProductWhereInput
       $orderBy: [ProductOrderByWithRelationInput] 
       $cursor: ProductWhereUniqueInput
       $take: Int
       $skip: Int
      ) {
        aggregateProduct(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
        ) {
          _count {
            id
            name
            price
            image
            createdAt
            updatedAt
            _all
          }
          _avg {
            price
          }
          _sum {
            price
          }
          _min {
            id
            name
            price
            image
            createdAt
            updatedAt
          }
          _max {
            id
            name
            price
            image
            createdAt
            updatedAt
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
      console.error(stringify({ loc: "aggregateProduct", variables, result }));
      throw e;
    }
  });

  test("groupByProduct", async () => {
    const query = `
      query(
        $where: ProductWhereInput
        $orderBy: [ProductOrderByWithAggregationInput]
        $by: [ProductScalarFieldEnum]!
        $having: ProductScalarWhereWithAggregatesInput
        $take: Int
        $skip: Int
      ) {
        groupByProduct(
          where: $where
          orderBy: $orderBy
          by: $by
          having: $having
          take: $take
          skip: $skip
        ) {
          id
          name
          price
          image
          createdAt
          updatedAt
          _count {
            id
            name
            price
            image
            createdAt
            updatedAt
            _all
          }
          _avg {
            price
          }
          _sum {
            price
          }
          _min {
            id
            name
            price
            image
            createdAt
            updatedAt
          }
          _max {
            id
            name
            price
            image
            createdAt
            updatedAt
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
      by: ["id", "name", "price", "image", "createdAt", "updatedAt"],
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
      console.error(stringify({ loc: "groupByProduct", variables, result }));
      throw e;
    }
  });

  test("deleteOneProduct", async () => {
    const query = `
      mutation(
       $where: ProductWhereUniqueInput!
      ) {
        deleteOneProduct(
          where: $where
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
      console.error(stringify({ loc: "deleteOneProduct", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.deleteOneProduct);
  });

  test("aggregateProduct", async () => {
    const query = `
      query(
       $where: ProductWhereInput
       $orderBy: [ProductOrderByWithRelationInput] 
       $cursor: ProductWhereUniqueInput
       $take: Int
       $skip: Int
      ) {
        aggregateProduct(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
        ) {
          _count {
            id
            name
            price
            image
            createdAt
            updatedAt
            _all
          }
          _avg {
            price
          }
          _sum {
            price
          }
          _min {
            id
            name
            price
            image
            createdAt
            updatedAt
          }
          _max {
            id
            name
            price
            image
            createdAt
            updatedAt
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
      console.error(stringify({ loc: "aggregateProduct", variables, result }));
      throw e;
    }
  });
});
