import { Type } from "@sinclair/typebox";
import { body } from "../body";
import { headers } from "../headers";
import { bodyGenerator } from "../generators/bodyGenerator";
import { recordGenerator } from "../generators/recordGenerator";
import { generator } from "../generators";
import { matchingRules } from "../matchingRules";

const $id = "#/definitions/response";

export const response = Type.Object(
  {
    body: Type.Optional(Type.Unknown()),
    headers: Type.Optional(Type.Ref(headers)),
    status: Type.Integer({ minimum: 100, maximum: 599 }),
  },
  { $id, additionalProperties: false }
);

export const responseV2 = Type.Composite(
  [
    response,
    Type.Object({
      matchingRules: Type.Optional(Type.Ref(matchingRules)),
    }),
  ],
  { $id, additionalProperties: false }
);

export const responseV3 = Type.Composite(
  [
    responseV2,
    Type.Object({
      generators: Type.Optional(
        Type.Object({
          body: Type.Optional(Type.Ref(bodyGenerator)),
          headers: Type.Optional(Type.Ref(recordGenerator)),
          status: Type.Optional(Type.Ref(generator)),
        })
      ),
    }),
  ],
  { $id, additionalProperties: false }
);

export const responseV4 = Type.Composite(
  [
    Type.Omit(responseV3, ["body"]),
    Type.Object({
      body: Type.Optional(Type.Ref(body)),
    }),
  ],
  { $id, additionalProperties: false }
);
