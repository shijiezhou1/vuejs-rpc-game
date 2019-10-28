import { assert } from "chai";
import Result from "@/views/Result.vue";

describe("Result.vue", () => {
  it("test typeof instance in each script for Result", () => {
    assert.instanceOf(Result.data, Function, "Expected to be function");
    assert.instanceOf(Result.mounted, Function, "Expected to be function");
  });
});
