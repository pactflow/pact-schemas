import { Static, Type } from "@sinclair/typebox";
import { body } from "./body";
import {
  genDate,
  genDateTime,
  genMockServerURL,
  genProviderState,
  genRandomBoolean,
  genRandomDecimal,
  genRandomHexadecimal,
  genRandomInt,
  genRandomString,
  genRegex,
  genTime,
  genUuid,
  genUuidFormat,
} from "./generators/rules";
import { bodyGenerator } from "./generators/bodyGenerator";
import { recordGenerator } from "./generators/recordGenerator";
import { generator, generatorV4 } from "./generators";
import { headers } from "./headers";
import {
  interaction,
  interactionV2,
  interactionV3,
  interactionV4,
} from "./interactions/interaction";
import { interactions } from "./interactions";
import {
  matchArrayContains,
  matchBoolean,
  matchContentType,
  matchDate,
  matchDatetime,
  matchDecimal,
  matchEachKey,
  matchEachValue,
  matchEquality,
  matchInclude,
  matchInteger,
  matchNotEmpty,
  matchNull,
  matchNumber,
  matchRegex,
  matchSemver,
  matchStatusCode,
  matchTime,
  matchType,
  matchValues,
} from "./matchingRules/rules";
import { matchers, matchersV4 } from "./matchingRules/matchers";
import { recordMatcher } from "./matchingRules/recordMatcher";
import { bodyMatcher } from "./matchingRules/bodyMatcher";
import { matchingRules, matchingRulesV3 } from "./matchingRules";
import { messageContents, message, messages } from "./messages";
import { metadata, metadataV4 } from "./metadata";
import { pacticipant } from "./pacticipant";
import { request, requestV2, requestV3, requestV4 } from "./request";
import { response, responseV2, responseV3, responseV4 } from "./response";

const $schema = "http://json-schema.org/draft-07/schema";

export const PactV1Schema = Type.Strict(
  Type.Object(
    {
      consumer: Type.Ref(pacticipant),
      interactions: Type.Ref(interactions),
      metadata: Type.Optional(Type.Ref(metadata)),
      provider: Type.Ref(pacticipant),
    },
    {
      $schema,
      title: "Pact V1",
      description: "Schema for a Pact file",
      definitions: {
        headers,
        interaction,
        interactions,
        metadata,
        pacticipant,
        request,
        response,
      },
    }
  )
);

export const PactV2Schema = Type.Strict(
  Type.Object(
    {
      consumer: Type.Ref(pacticipant),
      interactions: Type.Ref(interactions),
      metadata: Type.Optional(Type.Ref(metadata)),
      provider: Type.Ref(pacticipant),
    },
    {
      $schema,
      title: "Pact V2",
      description: "Schema for a Pact file",
      definitions: {
        headers,
        interaction: interactionV2,
        interactions,
        matchRegex,
        matchType,
        matchingRules,
        metadata,
        pacticipant,
        request: requestV2,
        response: responseV2,
      },
    }
  )
);

export const PactV3Schema = Type.Strict(
  Type.Object(
    {
      consumer: Type.Ref(pacticipant),
      interactions: Type.Optional(Type.Ref(interactions)),
      messages: Type.Optional(Type.Ref(messages)),
      metadata: Type.Optional(Type.Ref(metadata)),
      provider: Type.Ref(pacticipant),
    },
    {
      $schema,
      title: "Pact V3",
      description: "Schema for a Pact file",
      definitions: {
        genDate,
        genDateTime,
        genRandomBoolean,
        genRandomDecimal,
        genRandomHexadecimal,
        genRandomInt,
        genRandomString,
        genRegex,
        genTime,
        genUuid,
        bodyGenerator,
        recordGenerator,
        generator,
        headers,
        interaction: interactionV3,
        interactions,
        matchBoolean,
        matchContentType,
        matchDate,
        matchDatetime,
        matchDecimal,
        matchEquality,
        matchInclude,
        matchInteger,
        matchNull,
        matchNumber,
        matchRegex,
        matchTime,
        matchType,
        matchValues,
        matchers,
        matchingRules: matchingRulesV3,
        message,
        messages,
        metadata,
        bodyMatcher,
        recordMatcher,
        pacticipant,
        request: requestV3,
        response: responseV3,
      },
    }
  )
);

export const PactV4Schema = Type.Strict(
  Type.Object(
    {
      consumer: Type.Ref(pacticipant),
      interactions: Type.Ref(interactions),
      metadata: Type.Optional(Type.Ref(metadata)),
      provider: Type.Ref(pacticipant),
    },
    {
      $schema,
      title: "Pact V4",
      description: "Schema for a Pact file",
      definitions: {
        body,
        genDate,
        genDateTime,
        genMockServerURL,
        genProviderState,
        genRandomBoolean,
        genRandomDecimal,
        genRandomHexadecimal,
        genRandomInt,
        genRandomString,
        genRegex,
        genTime,
        genUuid,
        genUuidFormat,
        bodyGenerator,
        recordGenerator,
        generator: generatorV4,
        headers,
        interaction: interactionV4,
        interactions,
        matchArrayContains,
        matchBoolean,
        matchContentType,
        matchDate,
        matchDatetime,
        matchDecimal,
        matchEachKey,
        matchEachValue,
        matchEquality,
        matchInclude,
        matchInteger,
        matchNotEmpty,
        matchNull,
        matchNumber,
        matchRegex,
        matchSemver,
        matchStatusCode,
        matchTime,
        matchType,
        matchValues,
        matchers: matchersV4,
        matchingRules: matchingRulesV3,
        messageContents,
        metadata: metadataV4,
        bodyMatcher,
        recordMatcher,
        pacticipant,
        request: requestV4,
        response: responseV4,
      },
    }
  )
);

export type PactV1 = Static<typeof PactV1Schema>;
export type PactV2 = Static<typeof PactV2Schema>;
export type PactV3 = Static<typeof PactV3Schema>;
export type PactV4 = Static<typeof PactV4Schema>;
