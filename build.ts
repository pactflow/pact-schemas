import {
  PactV1Schema,
  PactV2Schema,
  PactV3Schema,
  PactV4Schema,
} from "./src/index";
import { writeFileSync } from "fs";
import { join } from "path";

writeFileSync(
  join(__dirname, "dist", "pact-schema-v1.json"),
  JSON.stringify(PactV1Schema, null, 2)
);
writeFileSync(
  join(__dirname, "dist", "pact-schema-v2.json"),
  JSON.stringify(PactV2Schema, null, 2)
);
writeFileSync(
  join(__dirname, "dist", "pact-schema-v3.json"),
  JSON.stringify(PactV3Schema, null, 2)
);
writeFileSync(
  join(__dirname, "dist", "pact-schema-v4.json"),
  JSON.stringify(PactV4Schema, null, 2)
);
