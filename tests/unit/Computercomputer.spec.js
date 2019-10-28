import { assert } from "chai";
// import { shallowMount } from "@vue/test-utils";
import Computercomputer from "@/views/Computercomputer.vue";

describe("Computercomputer.vue", () => {
  it("test typeof instance in each script for computer vs computer", () => {
    assert.instanceOf(
      Computercomputer.created,
      Function,
      "Expected to be function"
    );
    assert.instanceOf(
      Computercomputer.data,
      Function,
      "Expected to be function"
    );
    assert.instanceOf(
      Computercomputer.methods,
      Object,
      "Expected to be Object"
    );
  });
});
