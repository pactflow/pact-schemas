import { Type } from "@sinclair/typebox";

const $id = "#/definitions/metadata";

export const metadata = Type.Object(
  {
    pactSpecification: Type.Optional(
      Type.Object(
        {
          version: Type.String(),
        },
        { additionalProperties: false }
      )
    ),
    pactSpecificationVersion: Type.Optional(Type.String()),
    "pact-specification": Type.Optional(
      Type.Object(
        {
          version: Type.String(),
        },
        { additionalProperties: false }
      )
    ),
  },
  { $id }
);

export const metadataV4 = Type.Omit(
  metadata,
  ["pactSpecificationVersion", "pact-specification"],
  { $id }
);
