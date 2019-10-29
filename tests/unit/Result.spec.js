import { assert } from "chai";
import Result from "@/views/Result.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import sinon from "sinon";
import Vue from "vue";
import VueRouter from "vue-router";

import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

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
    assert.instanceOf(Result.created, Function, "Expected to be function");
  });

  it("test data object match the same", () => {
    const defaultData = Result.data();
    assert.deepEqual(
      defaultData,
      {
        msg: null,
        backRoute: null,
        computerPick: null,
        topSelectImage: null
      },
      "Expected to be null"
    );
  });

  it("correctly return the vue instances when created", () => {
    // MOCK STORE
    const store = new Vuex.Store({
      state: {
        START_PARMA: {
          msg: "You Win!",
          gameMode: "computercomputer",
          userPick: "paper",
          computerPick: "rock",
          topSelectImage: "/img/rock-copy.d5c80cef.png"
        }
      }
    });
    const wrapper = shallowMount(Result, {
      store,
      localVue
    });

    assert.equal(wrapper.vm.$data.msg, "You Win!", "Expected to be You Win!");
    assert.equal(
      wrapper.vm.$data.backRoute,
      "computercomputer",
      "Expected to be computercomputer"
    );
    assert.match(
      wrapper.vm.$data.topSelectImage,
      /rock-copy.*.png/g,
      "Expected to match vuejs image pattern"
    );
  });
});
