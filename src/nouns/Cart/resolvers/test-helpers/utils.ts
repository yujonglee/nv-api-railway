// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Initializers } from "../../../../core/test-helpers/mockerInit";
import { stringify } from "../../../../core/utils";
import { server } from "../../../../server";
import CartGenerator from "./generator";
import { CartCreateInput, CartCreateManyInput } from "../../types";

/**
  --------------------------
  Utility functions for test
  --------------------------
  Delete operations fail when Foreign Keys are required on the peer model
  Our goal here is to accomplish unit level test coverage
  Logistics of nested object management are delegated to the ORM/DB/client
*/
export async function createForDelete(initializers: Initializers) {
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
    mode: "delete",
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

  if (result.errors) {
    console.error(stringify({ loc: "createForDeleteCart", variables, result }));
    throw new Error(`Failed to create cart: ${result.errors}`);
  }

  return result!.data!.createOneCart!;
}

export async function getManyCreated(carts: CartCreateManyInput[]) {
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
      },
    }`;

  const variables = {
    where: {
      OR: carts.map((cart) => ({
        // we do not have the index/id for the entities.
        // since we are using the create input, there is a chance of duplication.
        // to ensure we find the unique objects created, we use use the
        // heuristic that (up to) the first three will together are unique.
        // If this is causing trouble, please re-arrange the order of
        // fields in your schema.prisma for this model.
        //
        // If that doesn't work, or this heuristic is insufficient,
        // please reach out to <support@tufan.io>

        AND: [].filter((x) => x !== undefined),
      })),
    },
    skip: 0,
  };

  const result = await server.executeOperation({
    query,
    variables,
  });

  if (result.errors) {
    console.error(stringify({ loc: "getManyCreated", variables, result }));
    throw new Error(`Failed to findManyCart: ${result.errors}`);
  }

  return result!.data!.findManyCart!;
}
