import { Type } from "@sinclair/typebox";
import { bodyMatcher } from "../matchingRules/bodyMatcher";
import { bodyGenerator } from "../generators/bodyGenerator";
import { recordGenerator } from "../generators/recordGenerator";

export const messageContents = Type.Object(
  {
    contents: Type.Unknown(),
    metadata: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
    metaData: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
    matchingRules: Type.Optional(
      Type.Object(
        {
          body: Type.Ref(bodyMatcher),
        },
        { additionalProperties: false }
      )
    ),
    generators: Type.Optional(
      Type.Object(
        {
          body: Type.Optional(Type.Ref(bodyGenerator)),
          metadata: Type.Optional(Type.Ref(recordGenerator)),
        },
        { additionalProperties: false }
      )
    ),
  },
  { $id: "#/definitions/messageContents", additionalProperties: false }
);

export const message = Type.Composite(
  [
    messageContents,
    Type.Object({
      description: Type.String(),
      providerState: Type.Optional(Type.String()),
    }),
  ],
  { $id: "#/definitions/message", additionalProperties: false }
);

export const messages = Type.Array(Type.Ref(message), {
  $id: "#/definitions/messages",
});
