import { assert } from "chai";
// import { shallowMount } from "@vue/test-utils";
import Playercomputer from "@/views/Playercomputer.vue";

describe("Playercomputer.vue", () => {
  it("test typeof instance in each script in player vs computer", () => {
    assert.instanceOf(
      Playercomputer.created,
      Function,
      "Expected to be function"
    );
    assert.instanceOf(Playercomputer.data, Function, "Expected to be function");
    assert.instanceOf(Playercomputer.methods, Object, "Expected to be Object");
  });
});
