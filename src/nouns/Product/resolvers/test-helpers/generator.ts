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
  name: string;
  price: GraphqlClient.Int;
  image: string;
};

// dependent fields, mocked by 'faker.*' and/or (async) independent computation
type Dependent = {};

// relations
type Relations = {
  carts?:
    | Array<
        | Prisma.CartCreateNestedManyWithoutItemsInput
        | GraphqlClient.CartCreateNestedManyWithoutItemsInput
      >
    | undefined;
};

type MockProduct<T, U> = T | U | { create: T; update: U };

export default async function ProductGenerator<
  T =
    | Prisma.ProductCreateInput
    | GraphqlClient.ProductCreateInput
    | GraphqlClient.ProductCreateManyInput,
  U = Prisma.ProductUpdateInput | GraphqlClient.ProductUpdateInput
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
}): Promise<Array<MockProduct<T, U>> | undefined> {
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
              name: faker.datatype.string(),
              price: Number(faker.datatype.number()),
              image: faker.datatype.string(),
            };

            // dependent fields, mocked by 'faker.*' and/or (async) independent computation
            const dependent: Dependent = {};

            // relations
            const descendants: DescendantCount[] = [];
            const carts = excludeRelation({
              relation: "Product:carts",
              stack,
              isRequired: true,
              mode,
            })
              ? undefined
              : await CartGenerator<
                  | Prisma.CartCreateWithoutItemsInput
                  | GraphqlClient.CartCreateWithoutItemsInput
                >({
                  min: 1,
                  max: 20,
                  stack: [...stack, "Product:carts", "Cart:items"],
                  initializers,
                  depth,
                  isGraphql,
                  mode,
                  trace: descendants,
                });

            // reconcile count of descendent objects created
            collateDescendants(leader, "Product", [carts], descendants).forEach(
              (el) => trace.push(el)
            );

            const relations: Relations = {
              carts: carts
                ? ({
                    create: isGraphql
                      ? {
                          nested:
                            mode === "upsert"
                              ? (
                                  carts as Array<{
                                    create: GraphqlClient.CartCreateWithoutItemsInput;
                                    update: GraphqlClient.CartUpdateWithoutItemsInput;
                                  }>
                                ).map(({ create }) => create)
                              : carts,
                        }
                      : carts,
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
            const updateFields: string[] = ["name", "price", "image", "carts"];
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
