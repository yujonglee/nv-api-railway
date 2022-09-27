// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import * as fs from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { assertValidSchema } from "graphql";
import { scalarResolvers } from "../scalars";
import { health } from "../core/resolvers";
import { noop } from "../core/resolvers";
import { findFirstUser } from "../nouns/User/resolvers/findFirstUser";
import { findManyUser } from "../nouns/User/resolvers/findManyUser";
import { groupByUser } from "../nouns/User/resolvers/groupByUser";
import { findUniqueUser } from "../nouns/User/resolvers/findUniqueUser";
import { createManyUser } from "../nouns/User/resolvers/createManyUser";
import { deleteManyUser } from "../nouns/User/resolvers/deleteManyUser";
import { updateOneUser } from "../nouns/User/resolvers/updateOneUser";
import { upsertOneUser } from "../nouns/User/resolvers/upsertOneUser";
import { updateManyUser } from "../nouns/User/resolvers/updateManyUser";
import { aggregateUser } from "../nouns/User/resolvers/aggregateUser";
import { deleteOneUser } from "../nouns/User/resolvers/deleteOneUser";
import { createOneUser } from "../nouns/User/resolvers/createOneUser";
import { createManyProduct } from "../nouns/Product/resolvers/createManyProduct";
import { upsertOneProduct } from "../nouns/Product/resolvers/upsertOneProduct";
import { findFirstProduct } from "../nouns/Product/resolvers/findFirstProduct";
import { updateOneProduct } from "../nouns/Product/resolvers/updateOneProduct";
import { findUniqueProduct } from "../nouns/Product/resolvers/findUniqueProduct";
import { createOneProduct } from "../nouns/Product/resolvers/createOneProduct";
import { groupByProduct } from "../nouns/Product/resolvers/groupByProduct";
import { findManyProduct } from "../nouns/Product/resolvers/findManyProduct";
import { updateManyProduct } from "../nouns/Product/resolvers/updateManyProduct";
import { deleteManyProduct } from "../nouns/Product/resolvers/deleteManyProduct";
import { aggregateProduct } from "../nouns/Product/resolvers/aggregateProduct";
import { deleteOneProduct } from "../nouns/Product/resolvers/deleteOneProduct";
import { groupByCart } from "../nouns/Cart/resolvers/groupByCart";
import { findManyCart } from "../nouns/Cart/resolvers/findManyCart";
import { findUniqueCart } from "../nouns/Cart/resolvers/findUniqueCart";
import { findFirstCart } from "../nouns/Cart/resolvers/findFirstCart";
import { updateOneCart } from "../nouns/Cart/resolvers/updateOneCart";
import { upsertOneCart } from "../nouns/Cart/resolvers/upsertOneCart";
import { updateManyCart } from "../nouns/Cart/resolvers/updateManyCart";
import { createOneCart } from "../nouns/Cart/resolvers/createOneCart";
import { deleteOneCart } from "../nouns/Cart/resolvers/deleteOneCart";
import { aggregateCart } from "../nouns/Cart/resolvers/aggregateCart";
import { createManyCart } from "../nouns/Cart/resolvers/createManyCart";
import { deleteManyCart } from "../nouns/Cart/resolvers/deleteManyCart";

const loadTypeDef = (file: string) => fs.readFileSync(file, "utf8");

//  Default API. Exposes ALL nouns and verbs in a single API (can be safely removed)
export const graphqlSchema = () => {
  // https://github.com/microsoft/TypeScript/blob/main/tests/baselines/reference/largeControlFlowGraph.errors.txt
  // @ts-ignore
  const schema = makeExecutableSchema({
    typeDefs: [
      loadTypeDef("./src/scalars.sdl"),
      loadTypeDef("./src/enums.sdl"),
      loadTypeDef("./src/core/resolvers.sdl"),
      loadTypeDef("./src/core/types.sdl"),
      loadTypeDef("./src/core/schema.sdl"),
      loadTypeDef("./src/core/directives.sdl"),
      loadTypeDef("./src/nouns/User/types.sdl"),
      loadTypeDef("./src/nouns/Product/types.sdl"),
      loadTypeDef("./src/nouns/Cart/types.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/findFirstUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/findManyUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/groupByUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/findUniqueUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/createManyUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/deleteManyUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/updateOneUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/upsertOneUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/updateManyUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/aggregateUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/deleteOneUser.sdl"),
      loadTypeDef("./src/nouns/User/resolvers/createOneUser.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/createManyProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/upsertOneProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/findFirstProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/updateOneProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/findUniqueProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/createOneProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/groupByProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/findManyProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/updateManyProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/deleteManyProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/aggregateProduct.sdl"),
      loadTypeDef("./src/nouns/Product/resolvers/deleteOneProduct.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/groupByCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/findManyCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/findUniqueCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/findFirstCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/updateOneCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/upsertOneCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/updateManyCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/createOneCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/deleteOneCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/aggregateCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/createManyCart.sdl"),
      loadTypeDef("./src/nouns/Cart/resolvers/deleteManyCart.sdl"),
    ],
    resolvers: {
      ...scalarResolvers,
      Mutation: {
        noop,
        createManyUser,
        deleteManyUser,
        updateOneUser,
        upsertOneUser,
        updateManyUser,
        deleteOneUser,
        createOneUser,
        createManyProduct,
        upsertOneProduct,
        updateOneProduct,
        createOneProduct,
        updateManyProduct,
        deleteManyProduct,
        deleteOneProduct,
        updateOneCart,
        upsertOneCart,
        updateManyCart,
        createOneCart,
        deleteOneCart,
        createManyCart,
        deleteManyCart,
      },
      Query: {
        health,
        findFirstUser,
        findManyUser,
        groupByUser,
        findUniqueUser,
        aggregateUser,
        findFirstProduct,
        findUniqueProduct,
        groupByProduct,
        findManyProduct,
        aggregateProduct,
        groupByCart,
        findManyCart,
        findUniqueCart,
        findFirstCart,
        aggregateCart,
      },
    },
  });
  assertValidSchema(schema);
  return schema;
};
