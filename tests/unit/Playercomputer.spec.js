import { assert } from "chai";
// import { shallowMount } from "@vue/test-utils";
import Playercomputer from "@/views/Playercomputer.vue";
import sinon from "sinon";
import Vue from "vue";

describe("Playercomputer.vue", () => {
  beforeEach(function() {
    sinon.createSandbox();
  });

  afterEach(function() {
    sinon.restore();
  });
  it("test typeof instance in each script in player vs computer", () => {
    assert.instanceOf(
      Playercomputer.created,
      Function,
      "Expected to be function"
    );
    assert.instanceOf(Playercomputer.data, Function, "Expected to be function");
    assert.instanceOf(Playercomputer.methods, Object, "Expected to be Object");
  });

  it("test data object match same", () => {
    const defaultData = Playercomputer.data();
    assert.deepEqual(
      defaultData,
      {
        gameMode: "playercomputer",
        userSelect: null,
        userSelectIndex: null,
        computerSelect: null,
        computerSelectIndex: null,
        selections: ["rock", "paper", "scissors"],
        resultMsg: {
          t: "Tie",
          w: "You Win!",
          l: "You Lose!"
        },
        results: [["t", "w", "l"], ["l", "t", "w"], ["w", "l", "t"]],
        clock: null
      },
      "Expected to be object"
    );
  });

  it("test created called with its functions", () => {
    const computerRandomSelect = sinon.stub(
      Playercomputer.methods,
      "computerRandomSelect"
    );
    const clockCountDown = sinon.stub(Playercomputer.methods, "clockCountDown");
    const vm = new Vue(Playercomputer).$mount();
    assert.equal(vm.clock, 5, "expected to be 5");
    sinon.assert.calledOnce(computerRandomSelect);
    sinon.assert.calledOnce(clockCountDown);
  });

  it("check choose sets user select and select Index", () => {
    const vm = new Vue(Playercomputer).$mount();
    // no user select currently
    assert.isNull(vm.userSelect, "Expected to be null");
    assert.isNull(vm.userSelectIndex, "Expected to be null");
  });

  it("check computerRandomSelect sets computer select and select Index", () => {
    const vm = new Vue(Playercomputer).$mount();
    assert.isString(vm.computerSelect, "Expected to be string");
    assert.isNumber(vm.computerSelectIndex, "Expected to be integer");
  });
});
