import { Type } from "@sinclair/typebox";
import { StringEnum } from "../utils";

// eachKey / eachValue / arrayContains nest matchers and generators. Refer to
// them by $ref so the version-specific definitions are picked up.
const matcherRef = Type.Unsafe({ $ref: "#/definitions/matcher" });
const generatorRef = Type.Unsafe({ $ref: "#/definitions/generator" });

// V2 matchers

export const matchType = Type.Object(
  {
    match: Type.Literal("type"),
    max: Type.Optional(Type.Number()),
    min: Type.Optional(Type.Number()),
  },
  { $id: "#/definitions/matchType", additionalProperties: false },
);

export const matchRegex = Type.Object(
  {
    match: Type.Literal("regex"),
    regex: Type.String(),
  },
  { $id: "#/definitions/matchRegex", additionalProperties: false },
);

// V3 matchers

export const matchBoolean = Type.Object(
  {
    match: Type.Literal("boolean"),
  },
  { $id: "#/definitions/matchBoolean", additionalProperties: false },
);

export const matchContentType = Type.Object(
  {
    match: Type.Literal("contentType"),
    value: Type.String(),
  },
  { $id: "#/definitions/matchContentType", additionalProperties: false },
);

export const matchDate = Type.Object(
  {
    match: Type.Literal("date"),
    format: Type.String(),
  },
  { $id: "#/definitions/matchDate", additionalProperties: false },
);

export const matchDatetime = Type.Object(
  {
    match: Type.Literal("datetime"),
    format: Type.String(),
  },
  { $id: "#/definitions/matchDatetime", additionalProperties: false },
);

export const matchDecimal = Type.Object(
  {
    match: Type.Literal("decimal"),
  },
  { $id: "#/definitions/matchDecimal", additionalProperties: false },
);

export const matchEquality = Type.Object(
  {
    match: Type.Literal("equality"),
  },
  { $id: "#/definitions/matchEquality", additionalProperties: false },
);

export const matchInclude = Type.Object(
  {
    match: Type.Literal("include"),
    value: Type.String(),
  },
  { $id: "#/definitions/matchInclude", additionalProperties: false },
);

export const matchInteger = Type.Object(
  {
    match: Type.Literal("integer"),
  },
  { $id: "#/definitions/matchInteger", additionalProperties: false },
);

export const matchNull = Type.Object(
  {
    match: Type.Literal("null"),
  },
  { $id: "#/definitions/matchNull", additionalProperties: false },
);

export const matchNumber = Type.Object(
  {
    match: Type.Literal("number"),
  },
  { $id: "#/definitions/matchNumber", additionalProperties: false },
);

export const matchTime = Type.Object(
  {
    match: Type.Literal("time"),
    format: Type.String(),
  },
  { $id: "#/definitions/matchTime", additionalProperties: false },
);

export const matchValues = Type.Object(
  {
    match: Type.Literal("values"),
  },
  { $id: "#/definitions/matchValues", additionalProperties: false },
);

// V4 matchers

export const matchArrayContains = Type.Object(
  {
    match: Type.Literal("arrayContains"),
    variants: Type.Array(
      Type.Object(
        {
          index: Type.Integer({ minimum: 0 }),
          rules: Type.Record(
            Type.String(),
            Type.Unsafe({ $ref: "#/definitions/matchers" }),
          ),
          generators: Type.Optional(Type.Record(Type.String(), generatorRef)),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { $id: "#/definitions/matchArrayContains", additionalProperties: false },
);

export const matchEachKey = Type.Object(
  {
    match: Type.Literal("eachKey"),
    rules: Type.Array(matcherRef),
    // JSON-encoded example value, omitted when empty
    value: Type.Optional(Type.String()),
    generator: Type.Optional(generatorRef),
  },
  { $id: "#/definitions/matchEachKey", additionalProperties: false },
);

export const matchEachValue = Type.Object(
  {
    match: Type.Literal("eachValue"),
    rules: Type.Array(matcherRef),
    // JSON-encoded example value, omitted when empty
    value: Type.Optional(Type.String()),
    generator: Type.Optional(generatorRef),
  },
  { $id: "#/definitions/matchEachValue", additionalProperties: false },
);

export const matchNotEmpty = Type.Object(
  {
    match: Type.Literal("notEmpty"),
  },
  { $id: "#/definitions/matchNotEmpty", additionalProperties: false },
);

export const matchSemver = Type.Object(
  {
    match: Type.Literal("semver"),
  },
  { $id: "#/definitions/matchSemver", additionalProperties: false },
);

export const matchStatusCode = Type.Object(
  {
    match: Type.Literal("statusCode"),
    status: Type.Union([
      StringEnum([
        "info",
        "success",
        "redirect",
        "clientError",
        "serverError",
        "nonError",
        "error",
      ]),
      Type.Array(Type.Integer({ minimum: 100, maximum: 599 })),
    ]),
  },
  { $id: "#/definitions/matchStatusCode", additionalProperties: false },
);

export const matchV2 = [Type.Ref(matchRegex), Type.Ref(matchType)];
export const matchV3 = [
  Type.Ref(matchBoolean),
  Type.Ref(matchContentType),
  Type.Ref(matchDate),
  Type.Ref(matchDatetime),
  Type.Ref(matchDecimal),
  Type.Ref(matchEquality),
  Type.Ref(matchInclude),
  Type.Ref(matchInteger),
  Type.Ref(matchNull),
  Type.Ref(matchNumber),
  Type.Ref(matchTime),
  Type.Ref(matchValues),
];
export const matchV4 = [
  Type.Ref(matchArrayContains),
  Type.Ref(matchEachKey),
  Type.Ref(matchEachValue),
  Type.Ref(matchNotEmpty),
  Type.Ref(matchSemver),
  Type.Ref(matchStatusCode),
];

// Every match type pact_models knows about. Used to keep the plugin escape
// hatch from swallowing a malformed built-in matcher.
export const knownMatchTypes = [
  "regex",
  "type",
  "min",
  "max",
  "minmax",
  "boolean",
  "contentType",
  "date",
  "datetime",
  "timestamp",
  "decimal",
  "real",
  "equality",
  "include",
  "integer",
  "null",
  "number",
  "time",
  "values",
  "arrayContains",
  "eachKey",
  "eachValue",
  "notEmpty",
  "semver",
  "statusCode",
];

// V4 only: matchers provided by plugins serialise as {match: <name>, ...config}
export const matchPlugin = Type.Object(
  {
    match: Type.String({ not: { enum: knownMatchTypes } }),
  },
  { $id: "#/definitions/matchPlugin", additionalProperties: true },
);

export const matchV4Plugin = [Type.Ref(matchPlugin)];
