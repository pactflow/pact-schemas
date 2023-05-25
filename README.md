# Pact Schemas

[![Pact Schemas](https://github.com/pactflow/pact-schemas/actions/workflows/build.yml/badge.svg)](https://github.com/pactflow/pact-schemas/actions/workflows/build.yml)

This repository reimplements [Pact JSON
Schema](https://bitbucket.org/atlassian/pact-json-schema) using
[TypeBox](https://github.com/sinclairzx81/typebox) enabling a more composeable
and thus sustainable way of building up the JSON Schema. All versions of pact;
[v1](https://github.com/pact-foundation/pact-specification/tree/version-1),
[v2](https://github.com/pact-foundation/pact-specification/tree/version-2),
[v3](https://github.com/pact-foundation/pact-specification/tree/version-3), and
[v4](https://github.com/pact-foundation/pact-specification/tree/version-4) are
supported.

## To install & run

```
npm ci
npm run lint
npm run prettier
npm run typecheck
npm run test
```

Or, if you're just interested in the actual schemas themselves, have a look
[here](./dist)
