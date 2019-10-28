import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    setGameMode(state, Object) {
      state.START_PARMA = Object;
    }
  },
  getters: {
    getGameMode(state) {
      return state;
    }
  },
  actions: {},
  modules: {}
});
