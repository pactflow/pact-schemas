import { Type } from "@sinclair/typebox";
import { messageContents } from "../messages";
import { request } from "../request";
import { response } from "../response";

const $id = "#/definitions/interaction";

export const interaction = Type.Object(
  {
    description: Type.String(),
    providerState: Type.Optional(Type.String()),
    provider_state: Type.Optional(Type.String()),
    request: Type.Ref(request),
    response: Type.Ref(response),
  },
  { $id, additionalProperties: false }
);

export const interactionV2 = Type.Omit(interaction, ["provider_state"]);

export const interactionV3 = Type.Composite(
  [
    Type.Omit(interactionV2, ["providerState"]),
    Type.Object({
      providerStates: Type.Optional(
        Type.Union([
          Type.String(),
          Type.Array(
            Type.Object({
              name: Type.String(),
              params: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
            })
          ),
        ])
      ),
    }),
  ],
  { $id, additionalProperties: false }
);

// TODO: DRY these
const commonInteractionV4 = Type.Object({
  comments: Type.Optional(
    Type.Object({
      testname: Type.Optional(Type.String()),
      text: Type.Optional(Type.Array(Type.String())),
    })
  ),
  interactionMarkup: Type.Optional(
    Type.Object(
      {
        markup: Type.String(),
        markupType: Type.Union([
          Type.Literal("COMMON_MARK"),
          Type.Literal("HTML"),
        ]),
      },
      { additionalProperties: false }
    )
  ),
  key: Type.Optional(Type.String()),
  pending: Type.Optional(Type.Boolean()),
  pluginConfiguration: Type.Optional(
    Type.Record(Type.String(), Type.Record(Type.String(), Type.Unknown()))
  ),
});

export const interactionV4 = Type.Union(
  [
    Type.Composite(
      [
        commonInteractionV4,
        interactionV3,
        Type.Object({
          type: Type.Literal("Synchronous/HTTP"),
        }),
      ],
      { additionalProperties: false }
    ),
    Type.Composite(
      [
        commonInteractionV4,
        Type.Omit(interactionV3, ["request", "response"]),
        messageContents,
        Type.Object({
          type: Type.Literal("Asynchronous/Messages"),
        }),
      ],
      { additionalProperties: false }
    ),
    Type.Composite(
      [
        commonInteractionV4,
        Type.Omit(interactionV3, ["request", "response"]),
        Type.Object({
          request: Type.Ref(messageContents),
          response: Type.Array(Type.Ref(messageContents)),
          type: Type.Literal("Synchronous/Messages"),
        }),
      ],
      { additionalProperties: false }
    ),
  ],
  { $id }
);
