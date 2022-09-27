## via [validator.js](https://github.com/validatorjs/validator.js#validators)
Please visit [validator.js](https://github.com/validatorjs/validator.js#validators) for documentation and specifics of individual validators

> NOTE:
> - Not all validations available are implemented. 
> - `DateTime` is an additional validation

## Available scalars
   1. **Alpha**: Check if the string contains only letters (a-zA-Z). Locale picked from context
   2. **Alphanumeric**: Check if the string contains only letters and numbers (a-zA-Z0-9)
   3. **Ascii**: Check if the string contains ASCII chars only
   4. **Base32**: Check if a string is base32 encoded
   5. **Base58**: Check if a string is base58 encoded
   6. **Base64**: Check if a string is base64 encoded. ([url safe](https://base64.guru/standards/base64url))
   7. **BIC**: Check if a string is a BIC (Bank Identification Code) or SWIFT code
   8. **BtcAddress**: Check if the string is a valid BTC address
   9. **ByteLength**: Check if the string\'s length (in UTF-8 bytes) falls in a range
  10. **CreditCard**: Check if the string is a credit card
  11. **Currency**: Check if the string is a valid currency amount
  12. **DataURI**: Check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs)
  13. **Date**: Check if the input is a valid date.e.g. [`2002-07-15`, new Date()]
  14. **DateTime**: Check if the string is a valid  [Prisma DateTime](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#default-value-for-a-datetime) ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), strict-mode date)
  15. **EAN**: Check if the string is an EAN (European Article Number)
  16. **Email**: Check if the string is an email
  17. **Empty**: Check if the string has a length of zero
  18. **EthereumAddress**: Check if the string is an [Ethereum](https://ethereum.org/) address using basic regex. Does not validate address checksums
  19. **FQDN**: Check if the string is a fully qualified domain name (e.g. domain.com)
  20. **FullWidth**: Check if the string contains any full-width chars
  21. **HalfWidth**: Check if the string contains any half-width chars
  22. **HashMd4**: Check if the string is a hash of type algorithm
  23. **HashMd5**: Check if the string is a hash of type 'md5'
  24. **HashSha1**: Check if the string is a hash of type 'sha1'
  25. **HashSha256**: Check if the string is a hash of type 'sha256'
  26. **HashSha384**: Check if the string is a hash of type 'sha384'
  27. **HashSha512**: Check if the string is a hash of type 'sha512'
  28. **HashRipemd128**: Check if the string is a hash of type 'ripemd128'
  29. **HashRipemd160**: Check if the string is a hash of type 'ripemd160'
  30. **HashTiger128**: Check if the string is a hash of type 'tiger128'
  31. **HashTiger160**: Check if the string is a hash of type 'tiger160'
  32. **HashTiger192**: Check if the string is a hash of type 'tiger192'
  33. **HashCrc32**: Check if the string is a hash of type 'crc32'
  34. **HashCrc32b**: Check if the string is a hash of type 'crc32b'
  35. **Hexadecimal**: Check if the string is a hexadecimal number
  36. **HexColor**: Check if the string is a hexadecimal color
  37. **HSL**: Check if the string is an HSL (hue, saturation, lightness, optional alpha)
  38. **IBAN**: Check if a string is a IBAN (International Bank Account Number)
  39. **IP**: Check if the string is an IP (version 4 or 6) (version==undefined => either)
  40. **IPv4**: Check if the string is an IP (version 4 or 6) (version==undefined => either)
  41. **IPv6**: Check if the string is an IP (version 4 or 6) (version==undefined => either)
  42. **IPRange**: Check if the string is an IP Range (version 4 or 6) (version==undefined => either)
  43. **ISBN**: Check if the string is an ISBN (version 10 or 13) (version==undefined => either)
  44. **ISIN**: Check if the string is an [ISIN][ISIN] (stock/security identifier)
  45. **ISO8601**: Check if the string is a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date
  46. **ISO31661Alpha2**: Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code
  47. **ISO31661Alpha3**: Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code
  48. **ISRC**: Check if the string is a [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code)
  49. **ISSN**: Check if the string is an [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number)
  50. **Json**: Check if the string is valid JSON (note: uses JSON.parse)
  51. **JWT**: Check if the string is valid JWT token
  52. **LatLong**: Check if the string is a valid latitude-longitude coordinate in the format `lat, long` or `lat, long`
  53. **Length**: Check if the string's length falls in a range
  54. **Locale**: Check if the string is a locale
  55. **Lowercase**: Check if the string is lowercase
  56. **MACAddress**: Check if the string is a MAC address
  57. **MimeType**: Check if the string matches to a valid [MIME type](https://en.wikipedia.org/wiki/Media_type) format
  58. **MobilePhone**: Check if the string is a mobile phone number
  59. **MongoId**: Check if the string is a valid hex-encoded representation of a [MongoDB ObjectId][mongoid]
  60. **Multibyte**: Check if the string contains one or more multibyte chars
  61. **Numeric**: Check if the string contains only numbers
  62. **Octal**: Check if the string is a valid octal number
  63. **PassportNumber**: Check if the string is a valid passport number
  64. **Port**: Check if the string is a valid port number
  65. **PostalCode**: Check if the string is a postal code
  66. **RFC3339**: Check if the string is a valid [RFC 3339](https://tools.ietf.org/html/rfc3339) date
  67. **RgbColor**: Check if the string is a rgb or rgba color
  68. **SemVer**: Check if the string is a Semantic Versioning Specification (SemVer)
  69. **SurrogatePair**: Check if the string contains any surrogate pairs chars
  70. **Uppercase**: Check if the string is uppercase
  71. **Slug**: Check if the string is of type slug
  72. **StrongPassword**: Check if a password is strong or not. Allows for custom requirements or scoring rules. If `returnScore` is true, then the function returns an integer score for the password rather than a boolean
  73. **URL**: Check if the string is an URL
  74. **UUID**: Check if the string is a UUID (version 3, 4 or 5)
  75. **VariableWidth**: Check if the string contains a mixture of full and half-width chars
  76. **VAT**: Checks that the string is a [valid VAT number](https://en.wikipedia.org/wiki/VAT_identification_number)