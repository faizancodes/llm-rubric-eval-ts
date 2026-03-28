/**
 * Configuration options for LlmRubricEvalTs.
 */
export interface LlmRubricEvalTsOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Rubric schema with typed scoring + explanations
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Dataset versioning with content hashes and snapshots
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Provider-agnostic adapters powered by your llm-chain interface
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Deterministic eval runs (seed, temperature, retries, timeouts)
   */
  feature4?: Record<string, unknown>;

  /**
   * Configuration for: Markdown/JSON reports suitable for GitHub PR comments
   */
  feature5?: Record<string, unknown>;
}

/**
 * Result returned by LlmRubricEvalTs operations.
 */
export interface LlmRubricEvalTsResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
