import { Type } from "@sinclair/typebox";
import { matchV2, matchV3, matchV4 } from "./rules";

const $id = "#/definitions/matchers";

export const matchers = Type.Object(
  {
    combine: Type.Optional(
      Type.Union([Type.Literal("AND"), Type.Literal("OR")])
    ),
    matchers: Type.Array(Type.Union([...matchV2, ...matchV3])),
  },
  { $id, additionalProperties: false }
);

export const matchersV4 = Type.Object(
  {
    combine: Type.Optional(
      Type.Union([Type.Literal("AND"), Type.Literal("OR")])
    ),
    matchers: Type.Array(Type.Union([...matchV2, ...matchV3, ...matchV4])),
  },
  { $id, additionalProperties: false }
);
