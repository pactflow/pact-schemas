import Ajv, { ValidateFunction } from "ajv";
import fs from "fs";
import path from "path";
import { beforeAll, describe, expect, it } from "vitest";
import { PactV1Schema, PactV2Schema, PactV3Schema, PactV4Schema } from "./";

const files = (version: string, status: string) =>
  fs.readdirSync(path.join(__dirname, "..", "examples", version, status));

const pactFile = (version: string, status: string, file: string) => {
  const filePath = path.join(
    __dirname,
    "..",
    "examples",
    version,
    status,
    file
  );
  return JSON.parse(fs.readFileSync(filePath).toString());
};

describe.each([
  { schema: PactV1Schema, version: "v1" },
  { schema: PactV2Schema, version: "v2" },
  { schema: PactV3Schema, version: "v3" },
  { schema: PactV4Schema, version: "v4" },
])("Pact", ({ schema, version }) => {
  describe(version, () => {
    let validate: ValidateFunction;

    beforeAll(() => {
      validate = new Ajv().compile(schema);
    });

    it("can be serialised", () => {
      expect(schema).toMatchSnapshot();
    });

    it.each(files(version, "pass"))("passes %s", (name) => {
      const result = validate(pactFile(version, "pass", name));
      expect(validate.errors).toBe(null);
      expect(result).toBe(true);
    });

    it.each(files(version, "fail"))("fails %s", (name) => {
      const result = validate(pactFile(version, "fail", name));
      expect(validate.errors).not.toBe(null);
      expect(result).toBe(false);
    });
  });
});
