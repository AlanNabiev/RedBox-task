import Vue from "vue";
import Vuex from "vuex";
import ratings from "./modules/ratings";
import formData from "./modules/formData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timerValidate: ""
  },
  mutations: {
    settimerValidate(state, paylod) {
      state.timerValidate = paylod;
    }
  },
  actions: {
    sendtimerValidate({ commit }, timerValidate) {
      commit("settimerValidate", timerValidate);
    }
  },
  getters: {
    timerValidate: (state) => state.timerValidate
  },
  modules: {
    ratings,
    formData
  }
});
