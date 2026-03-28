/**
 * Custom error classes for llm-rubric-eval-ts.
 */

/**
 * Base error class for all LlmRubricEvalTs errors.
 */
export class LlmRubricEvalTsError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "LLMRUBRICEVALTS_ERROR") {
    super(message);
    this.name = "LlmRubricEvalTsError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends LlmRubricEvalTsError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends LlmRubricEvalTsError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends LlmRubricEvalTsError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
