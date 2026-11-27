import { Type } from "@sinclair/typebox";
import { matchV2, matchV3, matchV4, matchV4Plugin } from "./rules";

const $id = "#/definitions/matchers";

export const matcher = Type.Union([...matchV2, ...matchV3], {
  $id: "#/definitions/matcher",
});

export const matcherV4 = Type.Union(
  [...matchV2, ...matchV3, ...matchV4, ...matchV4Plugin],
  { $id: "#/definitions/matcher" },
);

export const matchers = Type.Object(
  {
    combine: Type.Optional(
      Type.Union([Type.Literal("AND"), Type.Literal("OR")]),
    ),
    matchers: Type.Array(Type.Ref(matcher)),
  },
  { $id, additionalProperties: false },
);

export const matchersV4 = Type.Object(
  {
    combine: Type.Optional(
      Type.Union([Type.Literal("AND"), Type.Literal("OR")]),
    ),
    matchers: Type.Array(Type.Ref(matcherV4)),
  },
  { $id, additionalProperties: false },
);
