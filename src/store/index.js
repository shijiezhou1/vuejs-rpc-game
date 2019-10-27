import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameMode: null,
    userPick: null,
    computerPick: null
  },
  mutations: {
    setGameMode(state, payload) {
      state.gameMode = payload.gameMode;
      state.userPick = payload.userPick;
      state.computerPick = payload.computerPick;
    }
  },
  actions: {},
  modules: {}
});
