import { Type } from "@sinclair/typebox";

// V3 generators

export const genDate = Type.Object(
  {
    type: Type.Literal("Date"),
    format: Type.Optional(Type.String()),
  },
  { $id: "#/definitions/genDate", additionalProperties: false }
);

export const genDateTime = Type.Object(
  {
    type: Type.Literal("DateTime"),
    format: Type.Optional(Type.String()),
  },
  { $id: "#/definitions/genDateTime", additionalProperties: false }
);

export const genRandomBoolean = Type.Object(
  {
    type: Type.Literal("RandomBoolean"),
  },
  { $id: "#/definitions/genRandomBoolean", additionalProperties: false }
);

export const genRandomDecimal = Type.Object(
  {
    type: Type.Literal("RandomDecimal"),
    digits: Type.Number(),
  },
  { $id: "#/definitions/genRandomDecimal", additionalProperties: false }
);

export const genRandomHexadecimal = Type.Object(
  {
    type: Type.Literal("RandomHexadecimal"),
    digits: Type.Number(),
  },
  { $id: "#/definitions/genRandomHexadecimal", additionalProperties: false }
);

export const genRandomInt = Type.Object(
  {
    type: Type.Literal("RandomInt"),
    min: Type.Number(),
    max: Type.Number(),
  },
  { $id: "#/definitions/genRandomInt", additionalProperties: false }
);

export const genRandomString = Type.Object(
  {
    type: Type.Literal("RandomString"),
    size: Type.Number(),
  },
  { $id: "#/definitions/genRandomString", additionalProperties: false }
);

export const genRegex = Type.Object(
  {
    type: Type.Literal("Regex"),
    regex: Type.String(),
  },
  { $id: "#/definitions/genRegex", additionalProperties: false }
);

export const genTime = Type.Object(
  {
    type: Type.Literal("Time"),
    format: Type.Optional(Type.String()),
  },
  { $id: "#/definitions/genTime", additionalProperties: false }
);

export const genUuid = Type.Object(
  {
    type: Type.Literal("Uuid"),
  },
  { $id: "#/definitions/genUuid", additionalProperties: false }
);

// V4 generators

export const genMockServerURL = Type.Object(
  {
    type: Type.Literal("MockServerURL"),
    regex: Type.String(),
    example: Type.String(),
  },
  { $id: "#/definitions/genMockServerURL", additionalProperties: false }
);

export const genProviderState = Type.Object(
  {
    type: Type.Literal("ProviderState"),
    expression: Type.String(),
  },
  { $id: "#/definitions/genProviderState", additionalProperties: false }
);

export const genUuidFormat = Type.Object(
  {
    type: Type.Literal("Uuid"),
    format: Type.Union([
      Type.Literal("simple"),
      Type.Literal("lower-case-hyphenated"),
      Type.Literal("upper-case-hyphenated"),
      Type.Literal("URN"),
    ]),
  },
  { $id: "#/definitions/genUuidFormat", additionalProperties: false }
);

export const genV3 = [
  Type.Ref(genDate),
  Type.Ref(genDateTime),
  Type.Ref(genRandomBoolean),
  Type.Ref(genRandomDecimal),
  Type.Ref(genRandomHexadecimal),
  Type.Ref(genRandomInt),
  Type.Ref(genRandomString),
  Type.Ref(genRegex),
  Type.Ref(genTime),
  Type.Ref(genUuid),
];
export const genV4 = [
  Type.Ref(genMockServerURL),
  Type.Ref(genProviderState),
  Type.Ref(genUuidFormat),
];
