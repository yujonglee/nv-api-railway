// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Prisma } from "@prisma/client";
import * as GraphqlClient from "../../../../GraphqlClient";
import * as mocker from "./mocker";
import { pick } from "../../../../core/utils";
import CartGenerator from "../../../Cart/resolvers/test-helpers/generator";
import graphqlize from "../../../../core/test-helpers/graphqlize";
import {
  DescendantCount,
  Initializers,
  MockMode,
  collateDescendants,
  excludeRelation,
  removeEmpties,
} from "../../../../core/test-helpers/mockerInit";

// independent fields, mocked by 'faker.*'/'defaults'
export type Independent = {
  // @mock faker.name.firstName
  name: string;
  username: string;
  email: string;
  password: string;
};

// dependent fields, mocked by 'faker.*' and/or (async) independent computation
type Dependent = {};

// relations
type Relations = {
  cart?:
    | Prisma.CartCreateNestedOneWithoutUserInput
    | GraphqlClient.CartCreateNestedOneWithoutUserInput
    | undefined;
};

type MockUser<T, U> = T | U | { create: T; update: U };

export default async function UserGenerator<
  T =
    | Prisma.UserCreateInput
    | GraphqlClient.UserCreateInput
    | GraphqlClient.UserCreateManyInput,
  U = Prisma.UserUpdateInput | GraphqlClient.UserUpdateInput
>({
  count,
  stack = [],
  max = 100,
  min = 10,
  depth = 10,
  initializers,
  isGraphql = false,
  mode = "create",
  trace,
}: {
  min?: number;
  max?: number;
  count?: number;
  relCount?: number;
  stack?: string[];
  depth?: number;
  initializers: Initializers;
  isGraphql?: boolean;
  mode: MockMode;
  trace: DescendantCount[];
}): Promise<Array<MockUser<T, U>> | undefined> {
  const { cuid, faker, getCount, now, opt } = initializers;

  count = depth < stack.length ? 0 : getCount({ count, min, max });
  const leader = new Array((stack.length + 2) / 2).fill("#").join("");
  return count === 0
    ? ([] as T[])
    : Promise.all(
        Array(count)
          .fill(0) // ensures we can iterate over the range
          .map(async () => {
            // independent fields, mocked by 'faker.*'/'defaults'
            const independent = {
              name: faker.name.firstName(),
              username: faker.datatype.string(),
              email: faker.internet.email(),
              password: faker.datatype.string(),
            };

            // dependent fields, mocked by 'faker.*' and/or (async) independent computation
            const dependent: Dependent = {};

            // relations
            const descendants: DescendantCount[] = [];
            const cart = excludeRelation({
              relation: "Cart:user",
              stack,
              isRequired: false,
              mode,
            })
              ? undefined
              : (
                  await CartGenerator<
                    | Prisma.CartCreateWithoutUserInput
                    | GraphqlClient.CartCreateWithoutUserInput
                  >({
                    min: 0,
                    max: 20,
                    stack: [...stack, "User:cart", "Cart:user"],
                    initializers,
                    depth,
                    isGraphql,
                    mode,
                    trace: descendants,
                  })
                )?.pop();

            // reconcile count of descendent objects created
            collateDescendants(leader, "User", [cart], descendants).forEach(
              (el) => trace.push(el)
            );

            const relations: Relations = {
              cart: cart
                ? ({
                    create: isGraphql
                      ? {
                          nested:
                            mode === "upsert"
                              ? (
                                  cart as {
                                    create: GraphqlClient.CartCreateWithoutUserInput;
                                    update: GraphqlClient.CartUpdateWithoutUserInput;
                                  }
                                ).create
                              : cart,
                        }
                      : cart,
                  } as any)
                : undefined,
            };

            const create = removeEmpties({
              ...graphqlize(independent, isGraphql),
              ...graphqlize(dependent, isGraphql),
              ...relations,
            }) as unknown as T;

            // `update` fields are a subset of `create` fields (`@createOnly` fields being absent)
            // Also, we do not update relations (this is mock/test data after all)
            const updateFields: string[] = [
              "name",
              "email",
              "password",
              "cart",
            ];
            const update = pick<U>(
              {
                ...graphqlize(independent, isGraphql),
                ...graphqlize(dependent, isGraphql),
              },
              updateFields
            );

            return mode === "create" || mode === "delete"
              ? create
              : mode === "update"
              ? update
              : { create, update };
          })
      );
}
