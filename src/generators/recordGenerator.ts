import { Type } from "@sinclair/typebox";
import { generator } from "./";

const $id = "#/definitions/recordGenerator";

export const recordGenerator = Type.Record(Type.String(), Type.Ref(generator), {
  $id,
  additionalProperties: false,
});

export const recordGeneratorV4 = Type.Record(
  Type.String(),
  Type.Ref(generator),
  {
    $id,
    additionalProperties: false,
  }
);
