import { Type } from "@sinclair/typebox";
import { interaction } from "./interaction";

const $id = "#/definitions/interactions";

export const interactions = Type.Array(Type.Ref(interaction), {
  $id,
});
