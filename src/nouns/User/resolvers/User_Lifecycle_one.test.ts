// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { dataInvariants } from "data-invariants";
import { server } from "../../../server";
import { stringify } from "../../../core/utils";
import { init, Initializers } from "../../../core/test-helpers/mockerInit";
import { User, UserCreateInput, UserUpdateInput } from "../types";
import UserGenerator from "./test-helpers/generator";
import { createForDelete } from "./test-helpers/utils";

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

  test("createOneUser", async () => {
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

  test("findFirstUser", async () => {
    const query = `
      query(
       $where: UserWhereInput!
      ) {
        findFirstUser(
          where: $where
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
      console.error(stringify({ loc: "findFirstUser", variables, result }));
      throw e;
    }
  });

  test("updateOneUser", async () => {
    const query = `
      mutation(
       $data: updateOneUserInput!
       $where: UserWhereUniqueInput!
      ) {
        updateOneUser(
          data: $data
          where: $where
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

    const user = (await UserGenerator<UserCreateInput>({
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
      console.error(stringify({ loc: "updateOneUser", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.updateOneUser);
  });

  test("findUniqueUser", async () => {
    const query = `
      query(
       $where: UserWhereUniqueInput!
      ) {
        findUniqueUser(
          where: $where
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
      console.error(stringify({ loc: "findUniqueUser", variables, result }));
      throw e;
    }
  });

  test("upsertOneUser", async () => {
    const instance = await createForDelete(initializers)!;
    const query = `
      mutation(
       $where: UserWhereUniqueInput!
       $create: createOneUserInput!
       $update: updateOneUserInput!
      ) {
        upsertOneUser(
          where: $where
          create: $create
          update: $update
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

    const user = (await UserGenerator<UserCreateInput, UserUpdateInput>({
      count: 1,
      initializers,
      isGraphql: true,
      mode: "upsert",
      trace: [],
    }))!.pop() as { create: UserCreateInput; update: UserUpdateInput };

    const variables = {
      where: {
        id: instance.id,
      },
      create: {
        nested: user.create,
      },
      update: {
        nested: user.update,
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
      console.error(stringify({ loc: "upsertOneUser", variables, result }));
      throw e;
    }
  });

  test("aggregateUser", async () => {
    const query = `
      query(
       $where: UserWhereInput
       $orderBy: [UserOrderByWithRelationInput] 
       $cursor: UserWhereUniqueInput
       $take: Int
       $skip: Int
      ) {
        aggregateUser(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
        ) {
          _count {
            id
            name
            username
            email
            createdAt
            updatedAt
            _all
          }
          _min {
            id
            name
            username
            email
            createdAt
            updatedAt
          }
          _max {
            id
            name
            username
            email
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
      console.error(stringify({ loc: "aggregateUser", variables, result }));
      throw e;
    }
  });

  test("groupByUser", async () => {
    const query = `
      query(
        $where: UserWhereInput
        $orderBy: [UserOrderByWithAggregationInput]
        $by: [UserScalarFieldEnum]!
        $having: UserScalarWhereWithAggregatesInput
        $take: Int
        $skip: Int
      ) {
        groupByUser(
          where: $where
          orderBy: $orderBy
          by: $by
          having: $having
          take: $take
          skip: $skip
        ) {
          id
          name
          username
          email
          createdAt
          updatedAt
          _count {
            id
            name
            username
            email
            createdAt
            updatedAt
            _all
          }
          _min {
            id
            name
            username
            email
            createdAt
            updatedAt
          }
          _max {
            id
            name
            username
            email
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
      by: [
        "id",
        "name",
        "username",
        "email",
        "password",
        "createdAt",
        "updatedAt",
      ],
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
      console.error(stringify({ loc: "groupByUser", variables, result }));
      throw e;
    }
  });

  test("deleteOneUser", async () => {
    const query = `
      mutation(
       $where: UserWhereUniqueInput!
      ) {
        deleteOneUser(
          where: $where
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
      console.error(stringify({ loc: "deleteOneUser", variables, result }));
      throw e;
    }

    // cache this value, we'll use it for updates.
    cache.push(result.data?.deleteOneUser);
  });

  test("aggregateUser", async () => {
    const query = `
      query(
       $where: UserWhereInput
       $orderBy: [UserOrderByWithRelationInput] 
       $cursor: UserWhereUniqueInput
       $take: Int
       $skip: Int
      ) {
        aggregateUser(
          where: $where
          orderBy: $orderBy
          cursor: $cursor
          take: $take
          skip: $skip
        ) {
          _count {
            id
            name
            username
            email
            createdAt
            updatedAt
            _all
          }
          _min {
            id
            name
            username
            email
            createdAt
            updatedAt
          }
          _max {
            id
            name
            username
            email
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
      console.error(stringify({ loc: "aggregateUser", variables, result }));
      throw e;
    }
  });
});
