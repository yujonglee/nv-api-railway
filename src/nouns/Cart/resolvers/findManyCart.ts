// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Context } from "../../../core/utils";
import { CartScalarFieldEnum } from "../../../enums";
import { Int } from "../../../scalars";
import {
  CartOrderByWithRelationInput,
  CartWhereInput,
  CartWhereUniqueInput,
} from "../types";

// Query is a schema operation type extension. Skipping type generation.

// RESOLVERS

// [Prisma Transactions](https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide)
// [Prisma Errors](https://www.prisma.io/docs/reference/api-reference/error-reference)
// [GraphQL Errors](http://spec.graphql.org/draft/#sec-Errors)

export async function findManyCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.findMany(args);
}
