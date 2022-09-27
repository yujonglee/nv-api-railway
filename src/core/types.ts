// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { QueryMode } from "../enums";
import { DateTime, Float, Int } from "../scalars";
import { Context } from "./utils";

export type StringFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  mode?: QueryMode;
  not?: NestedStringFilter;
};

export type DateTimeFilter = {
  equals?: DateTime;
  in?: DateTime;
  notIn?: DateTime;
  lt?: DateTime;
  lte?: DateTime;
  gt?: DateTime;
  gte?: DateTime;
  not?: NestedDateTimeFilter;
};

export type StringWithAggregatesFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};

export type DateTimeWithAggregatesFilter = {
  equals?: DateTime;
  in?: DateTime;
  notIn?: DateTime;
  lt?: DateTime;
  lte?: DateTime;
  gt?: DateTime;
  gte?: DateTime;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
};

export type StringNullableFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  mode?: QueryMode;
  not?: NestedStringNullableFilter;
};

export type StringNullableWithAggregatesFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};

export type IntFilter = {
  equals?: Int;
  in?: Int;
  notIn?: Int;
  lt?: Int;
  lte?: Int;
  gt?: Int;
  gte?: Int;
  not?: NestedIntFilter;
};

export type IntWithAggregatesFilter = {
  equals?: Int;
  in?: Int;
  notIn?: Int;
  lt?: Int;
  lte?: Int;
  gt?: Int;
  gte?: Int;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
};

export type StringFieldUpdateOperationsInput = {
  set?: String;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: DateTime;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: String;
};

export type IntFieldUpdateOperationsInput = {
  set?: Int;
  increment?: Int;
  decrement?: Int;
  multiply?: Int;
  divide?: Int;
};

export type NestedStringFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  not?: NestedStringFilter;
};

export type NestedDateTimeFilter = {
  equals?: DateTime;
  in?: DateTime;
  notIn?: DateTime;
  lt?: DateTime;
  lte?: DateTime;
  gt?: DateTime;
  gte?: DateTime;
  not?: NestedDateTimeFilter;
};

export type NestedStringWithAggregatesFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};

export type NestedIntFilter = {
  equals?: Int;
  in?: Int;
  notIn?: Int;
  lt?: Int;
  lte?: Int;
  gt?: Int;
  gte?: Int;
  not?: NestedIntFilter;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: DateTime;
  in?: DateTime;
  notIn?: DateTime;
  lt?: DateTime;
  lte?: DateTime;
  gt?: DateTime;
  gte?: DateTime;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
};

export type NestedStringNullableFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  not?: NestedStringNullableFilter;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: String;
  in?: String;
  notIn?: String;
  lt?: String;
  lte?: String;
  gt?: String;
  gte?: String;
  contains?: String;
  startsWith?: String;
  endsWith?: String;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};

export type NestedIntNullableFilter = {
  equals?: Int;
  in?: Int;
  notIn?: Int;
  lt?: Int;
  lte?: Int;
  gt?: Int;
  gte?: Int;
  not?: NestedIntNullableFilter;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Int;
  in?: Int;
  notIn?: Int;
  lt?: Int;
  lte?: Int;
  gt?: Int;
  gte?: Int;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
};

export type NestedFloatFilter = {
  equals?: Float;
  in?: Float;
  notIn?: Float;
  lt?: Float;
  lte?: Float;
  gt?: Float;
  gte?: Float;
  not?: NestedFloatFilter;
};

export type AffectedRowsOutput = {
  count?: Int;
};
