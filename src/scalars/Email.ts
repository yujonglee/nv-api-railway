import { Kind, GraphQLError, GraphQLScalarType } from "graphql";
import isEmail from "validator/lib/isEmail";

const validate = (value: string) => {
  const options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    allow_ip_domain: false,
    domain_specific_validation: false,
    blacklisted_chars: "",
  };
  if (!isEmail(value, options)) {
    throw new TypeError(`Invalid value. '${value}' is not of type 'Email'`);
  }

  return value;
};

export type Email = string;

export const GraphQLEmail = /*#__PURE__*/ new GraphQLScalarType({
  name: "Email",
  description: [
    "Check if the string is an email",
    "  - If `allow_display_name=true`, the validator will also match `Display Name<email-address>`",
    "  - If `require_display_name=true`, the validator will reject strings without the format `Display Name<email-address>`",
    "  - If `allow_utf8_local_part=false`, the validator will not allow any non-English UTF8 character in email address' local part",
    "  - If `require_tld=false`, e-mail addresses without having TLD in their domain will also be matched",
    "  - If `ignore_max_length=true`, the validator will not check for the standard max length of an email",
    "  - If `allow_ip_domain=true`, the validator will allow IP addresses in the host part",
    "  - If `domain_specific_validation=true`, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail",
    "  - If `blacklisted_chars` receives a string, then the validator will reject emails that include any of the characters in the string, in the name part.`",
  ].join(""),

  serialize(value) {
    return validate(value);
  },

  parseValue(value) {
    return validate(value);
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as Email but got '${ast.kind}'`
      );
    }
    const value = ast.value;
    return validate(value);
  },

  extensions: {
    codegenScalarType: "string",
  },
});

export default GraphQLEmail;
