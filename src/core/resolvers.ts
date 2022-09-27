// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Int } from "../scalars";
import { Context } from "./utils";

// Query is a schema operation type. Skipping type generation.

// Mutation is a schema operation type. Skipping type generation.

// RESOLVERS

// [Prisma Transactions](https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide)
// [Prisma Errors](https://www.prisma.io/docs/reference/api-reference/error-reference)
// [GraphQL Errors](http://spec.graphql.org/draft/#sec-Errors)

export async function health(
  _parent: any,
  args: any,
  _context: Context,
  _info: any
) {
  // const { prisma } = context;
  if (args.level === "shallow") {
    return { status: "ok" };
  } else if (args.level === "normal") {
    // we need to check for prisma connection status here
    // prisma doesn't seem to provide that
    // also, we should rate limit the deeper health checks
    return { status: "ok" };
  } else if (args.level === "deep") {
    return { status: "ok" };
  }
}

export async function noop(
  parent: any,
  args: any,
  context: Context,
  info: any
): Promise<Int | null> {
  const { prisma } = context;
  return null;
}
