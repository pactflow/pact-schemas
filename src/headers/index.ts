import { Type } from "@sinclair/typebox";

const $id = "#/definitions/headers";

export const headers = Type.Union(
  [
    Type.Record(Type.String(), Type.String()),
    Type.Record(Type.String(), Type.Array(Type.String())),
  ],
  { $id }
);
