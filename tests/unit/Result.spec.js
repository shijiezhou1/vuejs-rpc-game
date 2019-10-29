import { assert } from "chai";
import Result from "@/views/Result.vue";
// import { mount } from "@vue/test-utils";
import sinon from "sinon";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

describe("Result.vue", () => {
  beforeEach(function() {
    sinon.createSandbox();
  });

  afterEach(function() {
    sinon.restore();
  });

  it("test typeof instance in each script for Result", () => {
    assert.instanceOf(Result.data, Function, "Expected to be function");
    assert.instanceOf(Result.mounted, Function, "Expected to be function");
  });

  it("test data object match the same", () => {
    const defaultData = Result.data();
    assert.deepEqual(
      defaultData,
      {
        msg: null,
        backRoute: null,
        userPick: null,
        computerPick: null,
        topSelectImage: null
      },
      "Expected to be null"
    );
  });

  it("correctly sets the message when mounted", () => {
    // const vm = new Vue(Result).$mount();
    // assert.equal(vm.msg, null, "Expected to be null");
  });
});
