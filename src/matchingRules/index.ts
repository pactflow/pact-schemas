import { Type } from "@sinclair/typebox";
import { OneOf } from "../utils";
import { matchV2 } from "./rules";
import { matchers } from "./matchers";
import { bodyMatcher } from "./bodyMatcher";
import { recordMatcher } from "./recordMatcher";

const $id = "#/definitions/matchingRules";

export const matchingRules = Type.Record(Type.RegEx(/^\$.*$/), OneOf(matchV2), {
  $id,
  additionalProperties: false,
});

export const matchingRulesV3 = Type.Object(
  {
    body: Type.Optional(Type.Ref(bodyMatcher)),
    header: Type.Optional(Type.Ref(recordMatcher)),
    path: Type.Optional(Type.Ref(matchers)),
    query: Type.Optional(Type.Ref(recordMatcher)),
  },
  { $id, additionalProperties: false }
);
