import { assert } from "chai";
import Computercomputer from "@/views/Computercomputer.vue";
import sinon from "sinon";
import Vue from "vue";

describe("Computercomputer.vue", () => {
  beforeEach(function() {
    sinon.createSandbox();
  });

  afterEach(function() {
    sinon.restore();
  });
  it("test typeof instance in each script for computer vs computer", () => {
    assert.instanceOf(
      Computercomputer.mounted,
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

  it("test the same data object needs to match", () => {
    const defaultData = Computercomputer.data();
    assert.deepEqual(
      defaultData,
      {
        gameMode: "computercomputer",
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
      "Expected to be null"
    );
  });
  it("test created called with its functions", () => {
    const computerRandomSelect = sinon.stub(
      Computercomputer.methods,
      "computerRandomSelect"
    );
    const computerOnBottomRandomSelect = sinon.stub(
      Computercomputer.methods,
      "computerOnBottomRandomSelect"
    );
    const clockCountDown = sinon.stub(
      Computercomputer.methods,
      "clockCountDown"
    );
    const vm = new Vue(Computercomputer).$mount();
    assert.equal(vm.clock, 5, "expected to be 5");
    sinon.assert.calledOnce(computerRandomSelect);
    sinon.assert.calledOnce(computerOnBottomRandomSelect);
    sinon.assert.calledOnce(clockCountDown);
  });

  it("check computerOnBottomRandomSelect sets first computer select and select Index", () => {
    const vm = new Vue(Computercomputer).$mount();
    assert.isString(vm.userSelect, "Expected to be string");
    assert.isNumber(vm.userSelectIndex, "Expected to be integer");
  });

  it("check computerOnBottomRandomSelect sets second computer select and select Index", () => {
    const vm = new Vue(Computercomputer).$mount();
    assert.isString(vm.computerSelect, "Expected to be string");
    assert.isNumber(vm.computerSelectIndex, "Expected to be integer");
  });
});
