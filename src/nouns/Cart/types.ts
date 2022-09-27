// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import {
  DateTimeFilter,
  DateTimeWithAggregatesFilter,
  StringFilter,
  StringNullableFilter,
  StringNullableWithAggregatesFilter,
  StringWithAggregatesFilter,
} from "../../core/types";
import { Context } from "../../core/utils";
import { SortOrder } from "../../enums";
import { DateTime, Int } from "../../scalars";
import {
  Product,
  ProductCreateNestedManyWithoutCartsInput,
  ProductListRelationFilter,
  ProductOrderByRelationAggregateInput,
  ProductUncheckedCreateNestedManyWithoutCartsInput,
  ProductUncheckedUpdateManyWithoutCartsNestedInput,
  ProductUpdateManyWithoutCartsNestedInput,
} from "../Product/types";
import {
  User,
  UserCreateNestedOneWithoutCartInput,
  UserOrderByWithRelationInput,
  UserRelationFilter,
  UserUpdateOneRequiredWithoutCartNestedInput,
} from "../User/types";

export type Cart = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  user?: User;
  userId?: String;
  items?: Product;
  coupon?: String;
};

export type CartWhereInput = {
  AND?: CartWhereInput;
  OR?: CartWhereInput;
  NOT?: CartWhereInput;

  /**
   * @readOnly
   */
  id?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  user?: UserRelationFilter;
  userId?: StringFilter;
  items?: ProductListRelationFilter;
  coupon?: StringNullableFilter;
};

export type CartOrderByWithRelationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  user?: UserOrderByWithRelationInput;
  userId?: SortOrder;
  items?: ProductOrderByRelationAggregateInput;
  coupon?: SortOrder;
};

export type CartWhereUniqueInput = {
  /**
   * @readOnly
   */
  id?: String;
  userId?: String;
};

export type CartOrderByWithAggregationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
  _count?: CartCountOrderByAggregateInput;
  _max?: CartMaxOrderByAggregateInput;
  _min?: CartMinOrderByAggregateInput;
};

export type CartScalarWhereWithAggregatesInput = {
  AND?: CartScalarWhereWithAggregatesInput;
  OR?: CartScalarWhereWithAggregatesInput;
  NOT?: CartScalarWhereWithAggregatesInput;

  /**
   * @readOnly
   */
  id?: StringWithAggregatesFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeWithAggregatesFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  coupon?: StringNullableWithAggregatesFilter;
};

export type CartCreateInput = {
  user: UserCreateNestedOneWithoutCartInput;
  items?: ProductCreateNestedManyWithoutCartsInput;
  coupon?: String;
};

export type CartUncheckedCreateInput = {
  userId: String;
  items?: ProductUncheckedCreateNestedManyWithoutCartsInput;
  coupon?: String;
};

export type CartUpdateInput = {
  user?: UserUpdateOneRequiredWithoutCartNestedInput;
  items?: ProductUpdateManyWithoutCartsNestedInput;
  coupon?: String;
};

export type CartUncheckedUpdateInput = {
  userId?: String;
  items?: ProductUncheckedUpdateManyWithoutCartsNestedInput;
  coupon?: String;
};

export type CartCreateManyInput = {
  userId: String;
  coupon?: String;
};

export type CartUpdateManyMutationInput = {
  coupon?: String;
};

export type CartUncheckedUpdateManyInput = {
  userId?: String;
  coupon?: String;
};

export type CartRelationFilter = {
  is?: CartWhereInput;
  isNot?: CartWhereInput;
};

export type CartCountOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
};

export type CartMaxOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
};

export type CartMinOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
};

export type CartListRelationFilter = {
  every?: CartWhereInput;
  some?: CartWhereInput;
  none?: CartWhereInput;
};

export type CartOrderByRelationAggregateInput = {
  _count?: SortOrder;
};

export type CartCreateNestedOneWithoutUserInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutUserInput;
};

export type CartCreateNestedOneWithoutUserInput = {
  create?: CartCreateNestedOneWithoutUserInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutUserInput;
  connect?: CartWhereUniqueInput;
};

export type CartUncheckedCreateNestedOneWithoutUserInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutUserInput;
};

export type CartUncheckedCreateNestedOneWithoutUserInput = {
  create?: CartUncheckedCreateNestedOneWithoutUserInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutUserInput;
  connect?: CartWhereUniqueInput;
};

export type CartUpdateOneWithoutUserNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutUserInput;
};

export type CartUpdateOneWithoutUserNestedInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartUpdateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedUpdateWithoutUserInput;
};

export type CartUpdateOneWithoutUserNestedInput = {
  create?: CartUpdateOneWithoutUserNestedInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutUserInput;
  upsert?: CartUpsertWithoutUserInput;
  disconnect?: Boolean;
  delete?: Boolean;
  connect?: CartWhereUniqueInput;
  update?: CartUpdateOneWithoutUserNestedInputupdateOneOf;
};

export type CartUncheckedUpdateOneWithoutUserNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutUserInput;
};

export type CartUncheckedUpdateOneWithoutUserNestedInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartUpdateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedUpdateWithoutUserInput;
};

export type CartUncheckedUpdateOneWithoutUserNestedInput = {
  create?: CartUncheckedUpdateOneWithoutUserNestedInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutUserInput;
  upsert?: CartUpsertWithoutUserInput;
  disconnect?: Boolean;
  delete?: Boolean;
  connect?: CartWhereUniqueInput;
  update?: CartUncheckedUpdateOneWithoutUserNestedInputupdateOneOf;
};

export type CartCreateNestedManyWithoutItemsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutItemsInput;
};

export type CartCreateNestedManyWithoutItemsInput = {
  create?: CartCreateNestedManyWithoutItemsInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutItemsInput;
  connect?: CartWhereUniqueInput;
};

export type CartUncheckedCreateNestedManyWithoutItemsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutItemsInput;
};

export type CartUncheckedCreateNestedManyWithoutItemsInput = {
  create?: CartUncheckedCreateNestedManyWithoutItemsInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutItemsInput;
  connect?: CartWhereUniqueInput;
};

export type CartUpdateManyWithoutItemsNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutItemsInput;
};

export type CartUpdateManyWithoutItemsNestedInput = {
  create?: CartUpdateManyWithoutItemsNestedInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutItemsInput;
  upsert?: CartUpsertWithWhereUniqueWithoutItemsInput;
  set?: CartWhereUniqueInput;
  disconnect?: CartWhereUniqueInput;
  delete?: CartWhereUniqueInput;
  connect?: CartWhereUniqueInput;
  update?: CartUpdateWithWhereUniqueWithoutItemsInput;
  updateMany?: CartUpdateManyWithWhereWithoutItemsInput;
  deleteMany?: CartScalarWhereInput;
};

export type CartUncheckedUpdateManyWithoutItemsNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutItemsInput;
};

export type CartUncheckedUpdateManyWithoutItemsNestedInput = {
  create?: CartUncheckedUpdateManyWithoutItemsNestedInputcreateOneOf;
  connectOrCreate?: CartCreateOrConnectWithoutItemsInput;
  upsert?: CartUpsertWithWhereUniqueWithoutItemsInput;
  set?: CartWhereUniqueInput;
  disconnect?: CartWhereUniqueInput;
  delete?: CartWhereUniqueInput;
  connect?: CartWhereUniqueInput;
  update?: CartUpdateWithWhereUniqueWithoutItemsInput;
  updateMany?: CartUpdateManyWithWhereWithoutItemsInput;
  deleteMany?: CartScalarWhereInput;
};

export type CartCreateWithoutUserInput = {
  items?: ProductCreateNestedManyWithoutCartsInput;
  coupon?: String;
};

export type CartUncheckedCreateWithoutUserInput = {
  items?: ProductUncheckedCreateNestedManyWithoutCartsInput;
  coupon?: String;
};

export type CartCreateOrConnectWithoutUserInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutUserInput;
};

export type CartCreateOrConnectWithoutUserInput = {
  where: CartWhereUniqueInput;
  create?: CartCreateOrConnectWithoutUserInputcreateOneOf;
};

export type CartUpsertWithoutUserInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartUpdateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedUpdateWithoutUserInput;
};

export type CartUpsertWithoutUserInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutUserInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutUserInput;
};

export type CartUpsertWithoutUserInput = {
  update?: CartUpsertWithoutUserInputupdateOneOf;
  create?: CartUpsertWithoutUserInputcreateOneOf;
};

export type CartUpdateWithoutUserInput = {
  items?: ProductUpdateManyWithoutCartsNestedInput;
  coupon?: String;
};

export type CartUncheckedUpdateWithoutUserInput = {
  items?: ProductUncheckedUpdateManyWithoutCartsNestedInput;
  coupon?: String;
};

export type CartCreateWithoutItemsInput = {
  user: UserCreateNestedOneWithoutCartInput;
  coupon?: String;
};

export type CartUncheckedCreateWithoutItemsInput = {
  userId: String;
  coupon?: String;
};

export type CartCreateOrConnectWithoutItemsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutItemsInput;
};

export type CartCreateOrConnectWithoutItemsInput = {
  where: CartWhereUniqueInput;
  create?: CartCreateOrConnectWithoutItemsInputcreateOneOf;
};

export type CartUpsertWithWhereUniqueWithoutItemsInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartUpdateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedUpdateWithoutItemsInput;
};

export type CartUpsertWithWhereUniqueWithoutItemsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateWithoutItemsInput;
};

export type CartUpsertWithWhereUniqueWithoutItemsInput = {
  where: CartWhereUniqueInput;
  update?: CartUpsertWithWhereUniqueWithoutItemsInputupdateOneOf;
  create?: CartUpsertWithWhereUniqueWithoutItemsInputcreateOneOf;
};

export type CartUpdateWithWhereUniqueWithoutItemsInputdataOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartUpdateWithoutItemsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedUpdateWithoutItemsInput;
};

export type CartUpdateWithWhereUniqueWithoutItemsInput = {
  where: CartWhereUniqueInput;
  data?: CartUpdateWithWhereUniqueWithoutItemsInputdataOneOf;
};

export type CartUpdateManyWithWhereWithoutItemsInputdataOneOf = {
  /**
   * Relations presented as nested objects
   */
  nestedMany?: CartUpdateManyMutationInput;

  /**
   * Relations represented by ids (FK)
   */
  relationalManyWithoutCarts?: CartUncheckedUpdateManyWithoutCartsInput;
};

export type CartUpdateManyWithWhereWithoutItemsInput = {
  where: CartScalarWhereInput;
  data?: CartUpdateManyWithWhereWithoutItemsInputdataOneOf;
};

export type CartScalarWhereInput = {
  AND?: CartScalarWhereInput;
  OR?: CartScalarWhereInput;
  NOT?: CartScalarWhereInput;

  /**
   * @readOnly
   */
  id?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
  coupon?: StringNullableFilter;
};

export type CartUpdateWithoutItemsInput = {
  user?: UserUpdateOneRequiredWithoutCartNestedInput;
  coupon?: String;
};

export type CartUncheckedUpdateWithoutItemsInput = {
  userId?: String;
  coupon?: String;
};

export type CartUncheckedUpdateManyWithoutCartsInput = {
  userId?: String;
  coupon?: String;
};

export type createOneCartInput = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartCreateInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedCreateInput;
};

export type updateOneCartInput = {
  /**
   * Relations presented as nested objects
   */
  nested?: CartUpdateInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: CartUncheckedUpdateInput;
};

export type updateManyCartInput = {
  /**
   * Relations presented as nested objects
   */
  nestedMany?: CartUpdateManyMutationInput;

  /**
   * Relations represented by ids (FK)
   */
  relationalMany?: CartUncheckedUpdateManyInput;
};

export type AggregateCart = {
  _count?: CartCountAggregateOutputType;
  _min?: CartMinAggregateOutputType;
  _max?: CartMaxAggregateOutputType;
};

export type CartGroupByOutputType = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
  _count?: CartCountAggregateOutputType;
  _min?: CartMinAggregateOutputType;
  _max?: CartMaxAggregateOutputType;
};

export type CartCountOutputType = {
  items?: Int;
};

export type CartCountAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: Int;

  /**
   * @readOnly
   */
  createdAt?: Int;

  /**
   * @readOnly
   */
  updatedAt?: Int;
  userId?: Int;
  coupon?: Int;
  _all?: Int;
};

export type CartMinAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
};

export type CartMaxAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
};
