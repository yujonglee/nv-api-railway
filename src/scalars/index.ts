// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { GraphQLJson } from "./Json";
import { GraphQLEmail } from "./Email";
import { GraphQLDateTime } from "./DateTime";

export { Json } from "./Json";
export { Email } from "./Email";
export { DateTime } from "./DateTime";

// Scalar definitions
// avoiding duplicate definitions
// type String = string;
// type Boolean = boolean;
export type Float = number;
export type Int = number;
export type ID = string;

export const scalarResolvers = {
  Json: GraphQLJson,
  Email: GraphQLEmail,
  DateTime: GraphQLDateTime,
};
