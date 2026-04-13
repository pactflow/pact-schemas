import { Type } from "@sinclair/typebox";
import { matchers } from "./matchers";

const $id = "#/definitions/bodyMatcher";

export const bodyMatcher = Type.Record(
  Type.String({ pattern: "^\\$.*$" }),
  Type.Ref(matchers),
  {
    $id,
  },
);
