// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Prisma } from "@prisma/client";
import * as GraphqlClient from "../../../../GraphqlClient";
import * as mocker from "./mocker";
import { pick } from "../../../../core/utils";
import ProductGenerator from "../../../Product/resolvers/test-helpers/generator";
import UserGenerator from "../../../User/resolvers/test-helpers/generator";
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
  coupon?: string;
};

// dependent fields, mocked by 'faker.*' and/or (async) independent computation
type Dependent = {};

// relations
type Relations = {
  user?:
    | Prisma.UserCreateNestedOneWithoutCartInput
    | GraphqlClient.UserCreateNestedOneWithoutCartInput
    | undefined;
  items?:
    | Array<
        | Prisma.ProductCreateNestedManyWithoutCartsInput
        | GraphqlClient.ProductCreateNestedManyWithoutCartsInput
      >
    | undefined;
};

type MockCart<T, U> = T | U | { create: T; update: U };

export default async function CartGenerator<
  T =
    | Prisma.CartCreateInput
    | GraphqlClient.CartCreateInput
    | GraphqlClient.CartCreateManyInput,
  U = Prisma.CartUpdateInput | GraphqlClient.CartUpdateInput
>({
  count,
  relCount,
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
}): Promise<Array<MockCart<T, U>> | undefined> {
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
              coupon: opt(faker.datatype.string()),
            };

            // dependent fields, mocked by 'faker.*' and/or (async) independent computation
            const dependent: Dependent = {};

            // relations
            const descendants: DescendantCount[] = [];
            const user = excludeRelation({
              relation: "User:cart",
              stack,
              isRequired: true,
              mode,
            })
              ? undefined
              : (
                  await UserGenerator<
                    | Prisma.UserCreateWithoutCartInput
                    | GraphqlClient.UserCreateWithoutCartInput
                  >({
                    count: 1,
                    stack: [...stack, "Cart:user", "User:cart"],
                    initializers,
                    depth,
                    isGraphql,
                    mode,
                    trace: descendants,
                  })
                )?.pop();

            const items = excludeRelation({
              relation: "Cart:items",
              stack,
              isRequired: true,
              mode,
            })
              ? undefined
              : await ProductGenerator<
                  | Prisma.ProductCreateWithoutCartsInput
                  | GraphqlClient.ProductCreateWithoutCartsInput
                >({
                  min: 1,
                  max: 20,
                  stack: [...stack, "Cart:items", "Product:carts"],
                  initializers,
                  depth,
                  isGraphql,
                  mode,
                  trace: descendants,
                });

            // reconcile count of descendent objects created
            collateDescendants(
              leader,
              "Cart",
              [user, items],
              descendants
            ).forEach((el) => trace.push(el));

            const relations: Relations = {
              user: user
                ? ({
                    create: isGraphql
                      ? {
                          nested:
                            mode === "upsert"
                              ? (
                                  user as {
                                    create: GraphqlClient.UserCreateWithoutCartInput;
                                    update: GraphqlClient.UserUpdateWithoutCartInput;
                                  }
                                ).create
                              : user,
                        }
                      : user,
                  } as any)
                : undefined,
              items: items
                ? ({
                    create: isGraphql
                      ? {
                          nested:
                            mode === "upsert"
                              ? (
                                  items as Array<{
                                    create: GraphqlClient.ProductCreateWithoutCartsInput;
                                    update: GraphqlClient.ProductUpdateWithoutCartsInput;
                                  }>
                                ).map(({ create }) => create)
                              : items,
                        }
                      : items,
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
            const updateFields: string[] = ["user", "items", "coupon"];
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
