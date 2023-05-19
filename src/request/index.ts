import { Type } from "@sinclair/typebox";
import { body } from "../body";
import { bodyGenerator } from "../generators/bodyGenerator";
import { recordGenerator } from "../generators/recordGenerator";
import { generator } from "../generators";
import { headers } from "../headers";
import { matchingRules } from "../matchingRules";
import { StringEnum } from "../utils";

const $id = "#/definitions/request";

export const request = Type.Object(
  {
    body: Type.Optional(Type.Unknown()),
    headers: Type.Optional(Type.Ref(headers)),
    method: StringEnum([
      "connect",
      "CONNECT",
      "delete",
      "DELETE",
      "get",
      "GET",
      "head",
      "HEAD",
      "options",
      "OPTIONS",
      "post",
      "POST",
      "put",
      "PUT",
      "trace",
      "TRACE",
    ]),
    path: Type.String(),
    query: Type.Optional(
      Type.RegEx(/^$|^[^=&]+=[^=&]+&?$|^[^=&]+=[^=&]+(&[^=&]+=[^=&]+)*&?$/)
    ),
  },
  { $id, additionalProperties: false }
);

export const requestV2 = Type.Composite(
  [
    request,
    Type.Object({
      matchingRules: Type.Optional(Type.Ref(matchingRules)),
    }),
  ],
  { $id, additionalProperties: false }
);

export const requestV3 = Type.Composite(
  [
    Type.Omit(requestV2, ["query"]),
    Type.Object({
      generators: Type.Optional(
        Type.Object({
          body: Type.Optional(Type.Ref(bodyGenerator)),
          headers: Type.Optional(Type.Ref(recordGenerator)),
          path: Type.Optional(Type.Ref(recordGenerator)),
          query: Type.Optional(Type.Ref(generator)),
        })
      ),
      query: Type.Optional(
        Type.Union([
          Type.Record(Type.String(), Type.String()),
          Type.Record(Type.String(), Type.Array(Type.String())),
        ])
      ),
    }),
  ],
  { $id, additionalProperties: false }
);

export const requestV4 = Type.Composite(
  [
    Type.Omit(requestV3, ["body"]),
    Type.Object({
      body: Type.Optional(Type.Ref(body)),
    }),
  ],
  { $id, additionalProperties: false }
);
