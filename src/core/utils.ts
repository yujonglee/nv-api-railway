// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import * as fs from "fs";
import { PrismaClient } from "@prisma/client";

export type Resolver = (...args: any) => any;

export type Resolvers = {
  Query?: Record<string, Resolver>;
  Mutation?: Record<string, Resolver>;
};

export type Context = {
  prisma: PrismaClient;
};

/**
 * GraphQL `input` types need special handling for TypeScript `union` types.
 * This function reverses the special handling, before the data from the GraphQL
 * request is passed onto the prismaClient
 */
export function undoOneOf(input: any): any {
  switch (Object.prototype.toString.apply(input)) {
    case "[object Object]": {
      return Object.entries(input).reduce(
        (acc: object, [key, value]) =>
          /^nested/.test(key) || /^relational/.test(key)
            ? undoOneOf(value)
            : { ...acc, [key]: undoOneOf(value) },
        {}
      );
    }
    case "[object Array]": {
      return input.map(undoOneOf);
    }
    default:
      return input;
  }
}

/**
 * Given an object, returns a clone, picking specified 'keys'
 * Further, the return object is type-cast as specified.
 *
 * FAIR WARNING:
 * This was designed for automated use, which is generated correctly
 * without a need for type-system gymnastics.
 * Specifically, correctness of return type is not guaranteed.
 *
 */
export function pick<T>(obj: Record<string, unknown>, keys: string[]): T {
  return Object.entries(obj).reduce((acc: T, [key, val]) => {
    if (keys.includes(key)) {
      (acc as any)[key] = val;
    }
    return acc;
  }, {} as T);
}

// https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields#serializing-bigint
export function stringify(obj: any) {
  return JSON.stringify(obj, (k, v) =>
    typeof v === "bigint" ? v.toString() : v
  );
}
