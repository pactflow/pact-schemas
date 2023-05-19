import { Type } from "@sinclair/typebox";

const $id = "#/definitions/pacticipant";

export const pacticipant = Type.Object(
  {
    name: Type.String(),
  },
  { $id }
);
