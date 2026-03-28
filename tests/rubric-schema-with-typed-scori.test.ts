import { describe, it, expect } from "vitest";
import { LlmRubricEvalTs } from "../src";

describe("LlmRubricEvalTs", () => {
  it("should create an instance with default options", () => {
    const instance = new LlmRubricEvalTs();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new LlmRubricEvalTs({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new LlmRubricEvalTs();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
