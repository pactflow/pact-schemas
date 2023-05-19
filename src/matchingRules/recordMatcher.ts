import { Type } from "@sinclair/typebox";
import { matchers } from "./matchers";

const $id = "#/definitions/recordMatcher";

export const recordMatcher = Type.Record(Type.String(), Type.Ref(matchers), {
  $id,
});
