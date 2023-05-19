import { Type } from "@sinclair/typebox";
import { generator } from "./";

const $id = "#/definitions/bodyGenerator";

export const bodyGenerator = Type.Record(
  Type.RegEx(/^\$.*$/),
  Type.Ref(generator),
  {
    $id,
    additionalProperties: false,
  }
);

export const bodyGeneratorV4 = Type.Record(
  Type.RegEx(/^\$.*$/),
  Type.Ref(generator),
  {
    $id,
    additionalProperties: false,
  }
);
