// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import {
  DateTimeFilter,
  DateTimeWithAggregatesFilter,
  StringFilter,
  StringWithAggregatesFilter,
} from "../../core/types";
import { Context } from "../../core/utils";
import { SortOrder } from "../../enums";
import { DateTime, Email, Int } from "../../scalars";
import {
  Cart,
  CartCreateNestedOneWithoutUserInput,
  CartOrderByWithRelationInput,
  CartRelationFilter,
  CartUncheckedCreateNestedOneWithoutUserInput,
  CartUncheckedUpdateOneWithoutUserNestedInput,
  CartUpdateOneWithoutUserNestedInput,
} from "../Cart/types";

export type User = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @createOnly
   */
  username?: String;

  /**
   * @scalar Email
   */
  email?: Email;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  cart?: Cart;
};

export type UserWhereInput = {
  AND?: UserWhereInput;
  OR?: UserWhereInput;
  NOT?: UserWhereInput;

  /**
   * @readOnly
   */
  id?: StringFilter;

  /**
   * @mock faker.name.firstName
   */
  name?: StringFilter;

  /**
   * @createOnly
   */
  username?: StringFilter;

  /**
   * @scalar Email
   */
  email?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  cart?: CartRelationFilter;
};

export type UserOrderByWithRelationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @createOnly
   */
  username?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  cart?: CartOrderByWithRelationInput;
};

export type UserWhereUniqueInput = {
  /**
   * @readOnly
   */
  id?: String;
};

export type UserOrderByWithAggregationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @createOnly
   */
  username?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput;
  OR?: UserScalarWhereWithAggregatesInput;
  NOT?: UserScalarWhereWithAggregatesInput;

  /**
   * @readOnly
   */
  id?: StringWithAggregatesFilter;

  /**
   * @mock faker.name.firstName
   */
  name?: StringWithAggregatesFilter;

  /**
   * @createOnly
   */
  username?: StringWithAggregatesFilter;

  /**
   * @scalar Email
   */
  email?: StringWithAggregatesFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeWithAggregatesFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeWithAggregatesFilter;
};

export type UserCreateInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @createOnly
   */
  username: String;

  /**
   * @scalar Email
   */
  email: String;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
  cart?: CartCreateNestedOneWithoutUserInput;
};

export type UserUncheckedCreateInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @createOnly
   */
  username: String;

  /**
   * @scalar Email
   */
  email: String;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
  cart?: CartUncheckedCreateNestedOneWithoutUserInput;
};

export type UserUpdateInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * This is a password
   * @writeOnly
   */
  password?: String;
  cart?: CartUpdateOneWithoutUserNestedInput;
};

export type UserUncheckedUpdateInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * This is a password
   * @writeOnly
   */
  password?: String;
  cart?: CartUncheckedUpdateOneWithoutUserNestedInput;
};

export type UserCreateManyInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @createOnly
   */
  username: String;

  /**
   * @scalar Email
   */
  email: String;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
};

export type UserUpdateManyMutationInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * This is a password
   * @writeOnly
   */
  password?: String;
};

export type UserUncheckedUpdateManyInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * This is a password
   * @writeOnly
   */
  password?: String;
};

export type UserCountOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @createOnly
   */
  username?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type UserMaxOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @createOnly
   */
  username?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type UserMinOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @createOnly
   */
  username?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type UserRelationFilter = {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
};

export type UserCreateNestedOneWithoutCartInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserCreateWithoutCartInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedCreateWithoutCartInput;
};

export type UserCreateNestedOneWithoutCartInput = {
  create?: UserCreateNestedOneWithoutCartInputcreateOneOf;
  connectOrCreate?: UserCreateOrConnectWithoutCartInput;
  connect?: UserWhereUniqueInput;
};

export type UserUpdateOneRequiredWithoutCartNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserCreateWithoutCartInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedCreateWithoutCartInput;
};

export type UserUpdateOneRequiredWithoutCartNestedInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserUpdateWithoutCartInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedUpdateWithoutCartInput;
};

export type UserUpdateOneRequiredWithoutCartNestedInput = {
  create?: UserUpdateOneRequiredWithoutCartNestedInputcreateOneOf;
  connectOrCreate?: UserCreateOrConnectWithoutCartInput;
  upsert?: UserUpsertWithoutCartInput;
  connect?: UserWhereUniqueInput;
  update?: UserUpdateOneRequiredWithoutCartNestedInputupdateOneOf;
};

export type UserCreateWithoutCartInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @createOnly
   */
  username: String;

  /**
   * @scalar Email
   */
  email: String;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
};

export type UserUncheckedCreateWithoutCartInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @createOnly
   */
  username: String;

  /**
   * @scalar Email
   */
  email: String;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
};

export type UserCreateOrConnectWithoutCartInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserCreateWithoutCartInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedCreateWithoutCartInput;
};

export type UserCreateOrConnectWithoutCartInput = {
  where: UserWhereUniqueInput;
  create?: UserCreateOrConnectWithoutCartInputcreateOneOf;
};

export type UserUpsertWithoutCartInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserUpdateWithoutCartInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedUpdateWithoutCartInput;
};

export type UserUpsertWithoutCartInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserCreateWithoutCartInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedCreateWithoutCartInput;
};

export type UserUpsertWithoutCartInput = {
  update?: UserUpsertWithoutCartInputupdateOneOf;
  create?: UserUpsertWithoutCartInputcreateOneOf;
};

export type UserUpdateWithoutCartInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * This is a password
   * @writeOnly
   */
  password?: String;
};

export type UserUncheckedUpdateWithoutCartInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * This is a password
   * @writeOnly
   */
  password?: String;
};

export type createOneUserInput = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserCreateInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedCreateInput;
};

export type updateOneUserInput = {
  /**
   * Relations presented as nested objects
   */
  nested?: UserUpdateInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: UserUncheckedUpdateInput;
};

export type updateManyUserInput = {
  /**
   * Relations presented as nested objects
   */
  nestedMany?: UserUpdateManyMutationInput;

  /**
   * Relations represented by ids (FK)
   */
  relationalMany?: UserUncheckedUpdateManyInput;
};

export type AggregateUser = {
  _count?: UserCountAggregateOutputType;
  _min?: UserMinAggregateOutputType;
  _max?: UserMaxAggregateOutputType;
};

export type UserGroupByOutputType = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @createOnly
   */
  username?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  _count?: UserCountAggregateOutputType;
  _min?: UserMinAggregateOutputType;
  _max?: UserMaxAggregateOutputType;
};

export type UserCountAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: Int;

  /**
   * @mock faker.name.firstName
   */
  name?: Int;

  /**
   * @createOnly
   */
  username?: Int;

  /**
   * @scalar Email
   */
  email?: Int;

  /**
   * @readOnly
   */
  createdAt?: Int;

  /**
   * @readOnly
   */
  updatedAt?: Int;
  _all?: Int;
};

export type UserMinAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @createOnly
   */
  username?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};

export type UserMaxAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: String;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @createOnly
   */
  username?: String;

  /**
   * @scalar Email
   */
  email?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};
