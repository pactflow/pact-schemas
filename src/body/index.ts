import { Type } from "@sinclair/typebox";

const $id = "#/definitions/body";

export const body = Type.Object(
  {
    content: Type.Union([Type.String(), Type.Unknown()]),
    contentType: Type.String(),
    contentTypeHint: Type.Union([Type.Literal("BINARY"), Type.Literal("TEXT")]),
    encoded: Type.Union([Type.Boolean(), Type.String()]),
  },
  { $id, additionalProperties: false }
);
