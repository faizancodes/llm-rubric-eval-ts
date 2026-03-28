# llm-rubric-eval-ts

Run rubric-based LLM evals with reproducible datasets and provider-agnostic adapters.

## Installation

```bash
npm install llm-rubric-eval-ts
```

## Quick Start

```typescript
import { LlmRubricEvalTs } from "llm-rubric-eval-ts";

const instance = new LlmRubricEvalTs();
const result = await instance.run();
console.log(result);
```

## Features

- Rubric schema with typed scoring + explanations
- Dataset versioning with content hashes and snapshots
- Provider-agnostic adapters powered by your llm-chain interface
- Deterministic eval runs (seed, temperature, retries, timeouts)
- Markdown/JSON reports suitable for GitHub PR comments

## API Reference

### `LlmRubricEvalTs`

#### Constructor

```typescript
new LlmRubricEvalTs(options?: LlmRubricEvalTsOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<LlmRubricEvalTsResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
