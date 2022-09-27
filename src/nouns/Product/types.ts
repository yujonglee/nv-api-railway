// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import {
  DateTimeFilter,
  DateTimeWithAggregatesFilter,
  IntFilter,
  IntWithAggregatesFilter,
  StringFilter,
  StringWithAggregatesFilter,
} from "../../core/types";
import { Context } from "../../core/utils";
import { SortOrder } from "../../enums";
import { DateTime, Float, Int } from "../../scalars";
import {
  Cart,
  CartCreateNestedManyWithoutItemsInput,
  CartListRelationFilter,
  CartOrderByRelationAggregateInput,
  CartUncheckedCreateNestedManyWithoutItemsInput,
  CartUncheckedUpdateManyWithoutItemsNestedInput,
  CartUpdateManyWithoutItemsNestedInput,
} from "../Cart/types";

export type Product = {
  /**
   * @readOnly
   */
  id?: String;
  name?: String;
  price?: Int;
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  carts?: Cart;
};

export type ProductWhereInput = {
  AND?: ProductWhereInput;
  OR?: ProductWhereInput;
  NOT?: ProductWhereInput;

  /**
   * @readOnly
   */
  id?: StringFilter;
  name?: StringFilter;
  price?: IntFilter;
  image?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  carts?: CartListRelationFilter;
};

export type ProductOrderByWithRelationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  carts?: CartOrderByRelationAggregateInput;
};

export type ProductWhereUniqueInput = {
  /**
   * @readOnly
   */
  id?: String;
};

export type ProductOrderByWithAggregationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  _count?: ProductCountOrderByAggregateInput;
  _avg?: ProductAvgOrderByAggregateInput;
  _max?: ProductMaxOrderByAggregateInput;
  _min?: ProductMinOrderByAggregateInput;
  _sum?: ProductSumOrderByAggregateInput;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: ProductScalarWhereWithAggregatesInput;
  OR?: ProductScalarWhereWithAggregatesInput;
  NOT?: ProductScalarWhereWithAggregatesInput;

  /**
   * @readOnly
   */
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  price?: IntWithAggregatesFilter;
  image?: StringWithAggregatesFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeWithAggregatesFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeWithAggregatesFilter;
};

export type ProductCreateInput = {
  name: String;
  price: Int;
  image: String;
  carts?: CartCreateNestedManyWithoutItemsInput;
};

export type ProductUncheckedCreateInput = {
  name: String;
  price: Int;
  image: String;
  carts?: CartUncheckedCreateNestedManyWithoutItemsInput;
};

export type ProductUpdateInput = {
  name?: String;
  price?: Int;
  image?: String;
  carts?: CartUpdateManyWithoutItemsNestedInput;
};

export type ProductUncheckedUpdateInput = {
  name?: String;
  price?: Int;
  image?: String;
  carts?: CartUncheckedUpdateManyWithoutItemsNestedInput;
};

export type ProductCreateManyInput = {
  name: String;
  price: Int;
  image: String;
};

export type ProductUpdateManyMutationInput = {
  name?: String;
  price?: Int;
  image?: String;
};

export type ProductUncheckedUpdateManyInput = {
  name?: String;
  price?: Int;
  image?: String;
};

export type ProductListRelationFilter = {
  every?: ProductWhereInput;
  some?: ProductWhereInput;
  none?: ProductWhereInput;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: SortOrder;
};

export type ProductCountOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type ProductAvgOrderByAggregateInput = {
  price?: SortOrder;
};

export type ProductMaxOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type ProductMinOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type ProductSumOrderByAggregateInput = {
  price?: SortOrder;
};

export type ProductCreateNestedManyWithoutCartsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateWithoutCartsInput;
};

export type ProductCreateNestedManyWithoutCartsInput = {
  create?: ProductCreateNestedManyWithoutCartsInputcreateOneOf;
  connectOrCreate?: ProductCreateOrConnectWithoutCartsInput;
  connect?: ProductWhereUniqueInput;
};

export type ProductUncheckedCreateNestedManyWithoutCartsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateWithoutCartsInput;
};

export type ProductUncheckedCreateNestedManyWithoutCartsInput = {
  create?: ProductUncheckedCreateNestedManyWithoutCartsInputcreateOneOf;
  connectOrCreate?: ProductCreateOrConnectWithoutCartsInput;
  connect?: ProductWhereUniqueInput;
};

export type ProductUpdateManyWithoutCartsNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateWithoutCartsInput;
};

export type ProductUpdateManyWithoutCartsNestedInput = {
  create?: ProductUpdateManyWithoutCartsNestedInputcreateOneOf;
  connectOrCreate?: ProductCreateOrConnectWithoutCartsInput;
  upsert?: ProductUpsertWithWhereUniqueWithoutCartsInput;
  set?: ProductWhereUniqueInput;
  disconnect?: ProductWhereUniqueInput;
  delete?: ProductWhereUniqueInput;
  connect?: ProductWhereUniqueInput;
  update?: ProductUpdateWithWhereUniqueWithoutCartsInput;
  updateMany?: ProductUpdateManyWithWhereWithoutCartsInput;
  deleteMany?: ProductScalarWhereInput;
};

export type ProductUncheckedUpdateManyWithoutCartsNestedInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateWithoutCartsInput;
};

export type ProductUncheckedUpdateManyWithoutCartsNestedInput = {
  create?: ProductUncheckedUpdateManyWithoutCartsNestedInputcreateOneOf;
  connectOrCreate?: ProductCreateOrConnectWithoutCartsInput;
  upsert?: ProductUpsertWithWhereUniqueWithoutCartsInput;
  set?: ProductWhereUniqueInput;
  disconnect?: ProductWhereUniqueInput;
  delete?: ProductWhereUniqueInput;
  connect?: ProductWhereUniqueInput;
  update?: ProductUpdateWithWhereUniqueWithoutCartsInput;
  updateMany?: ProductUpdateManyWithWhereWithoutCartsInput;
  deleteMany?: ProductScalarWhereInput;
};

export type ProductCreateWithoutCartsInput = {
  name: String;
  price: Int;
  image: String;
};

export type ProductUncheckedCreateWithoutCartsInput = {
  name: String;
  price: Int;
  image: String;
};

export type ProductCreateOrConnectWithoutCartsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateWithoutCartsInput;
};

export type ProductCreateOrConnectWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  create?: ProductCreateOrConnectWithoutCartsInputcreateOneOf;
};

export type ProductUpsertWithWhereUniqueWithoutCartsInputupdateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductUpdateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedUpdateWithoutCartsInput;
};

export type ProductUpsertWithWhereUniqueWithoutCartsInputcreateOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateWithoutCartsInput;
};

export type ProductUpsertWithWhereUniqueWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  update?: ProductUpsertWithWhereUniqueWithoutCartsInputupdateOneOf;
  create?: ProductUpsertWithWhereUniqueWithoutCartsInputcreateOneOf;
};

export type ProductUpdateWithWhereUniqueWithoutCartsInputdataOneOf = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductUpdateWithoutCartsInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedUpdateWithoutCartsInput;
};

export type ProductUpdateWithWhereUniqueWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  data?: ProductUpdateWithWhereUniqueWithoutCartsInputdataOneOf;
};

export type ProductUpdateManyWithWhereWithoutCartsInputdataOneOf = {
  /**
   * Relations presented as nested objects
   */
  nestedMany?: ProductUpdateManyMutationInput;

  /**
   * Relations represented by ids (FK)
   */
  relationalManyWithoutItems?: ProductUncheckedUpdateManyWithoutItemsInput;
};

export type ProductUpdateManyWithWhereWithoutCartsInput = {
  where: ProductScalarWhereInput;
  data?: ProductUpdateManyWithWhereWithoutCartsInputdataOneOf;
};

export type ProductScalarWhereInput = {
  AND?: ProductScalarWhereInput;
  OR?: ProductScalarWhereInput;
  NOT?: ProductScalarWhereInput;

  /**
   * @readOnly
   */
  id?: StringFilter;
  name?: StringFilter;
  price?: IntFilter;
  image?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
};

export type ProductUpdateWithoutCartsInput = {
  name?: String;
  price?: Int;
  image?: String;
};

export type ProductUncheckedUpdateWithoutCartsInput = {
  name?: String;
  price?: Int;
  image?: String;
};

export type ProductUncheckedUpdateManyWithoutItemsInput = {
  name?: String;
  price?: Int;
  image?: String;
};

export type createOneProductInput = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductCreateInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedCreateInput;
};

export type updateOneProductInput = {
  /**
   * Relations presented as nested objects
   */
  nested?: ProductUpdateInput;

  /**
   * Relations represented by ids (FK)
   */
  relational?: ProductUncheckedUpdateInput;
};

export type updateManyProductInput = {
  /**
   * Relations presented as nested objects
   */
  nestedMany?: ProductUpdateManyMutationInput;

  /**
   * Relations represented by ids (FK)
   */
  relationalMany?: ProductUncheckedUpdateManyInput;
};

export type AggregateProduct = {
  _count?: ProductCountAggregateOutputType;
  _avg?: ProductAvgAggregateOutputType;
  _sum?: ProductSumAggregateOutputType;
  _min?: ProductMinAggregateOutputType;
  _max?: ProductMaxAggregateOutputType;
};

export type ProductGroupByOutputType = {
  /**
   * @readOnly
   */
  id?: String;
  name?: String;
  price?: Int;
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  _count?: ProductCountAggregateOutputType;
  _avg?: ProductAvgAggregateOutputType;
  _sum?: ProductSumAggregateOutputType;
  _min?: ProductMinAggregateOutputType;
  _max?: ProductMaxAggregateOutputType;
};

export type ProductCountOutputType = {
  carts?: Int;
};

export type ProductCountAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: Int;
  name?: Int;
  price?: Int;
  image?: Int;

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

export type ProductAvgAggregateOutputType = {
  price?: Float;
};

export type ProductSumAggregateOutputType = {
  price?: Int;
};

export type ProductMinAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: String;
  name?: String;
  price?: Int;
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};

export type ProductMaxAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: String;
  name?: String;
  price?: Int;
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};
