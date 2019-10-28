import { assert, expect } from "chai";
import Result from "@/views/Result.vue";
import { mount } from "@vue/test-utils";
import sinon from "sinon";

describe("Result.vue", () => {
  beforeEach(function() {
    sinon.createSandbox();
  });

  afterEach(function() {
    sinon.restore();
  });

  it("test typeof instance in each script for Result", () => {
    sinon.stub(Result.mounted);

    mount(Result);

    expect(1, 1).to.be.equals;

    assert.instanceOf(Result.data, Function, "Expected to be function");
    assert.instanceOf(Result.mounted, Function, "Expected to be function");
  });
});
