export default {
  namespaced: true,
  state: {
    formData: {},
    Dates: {}
  },
  mutations: {
    setFormData(state, paylod) {
      state.formData = paylod;
    },
    setDates(state, paylod) {
      state.Dates = paylod;
    }
  },
  actions: {
    sendFormData({ commit }, form) {
      commit("setFormData", form);
    },
    sendDates({ commit }, dates) {
      commit("setDates", dates);
    }
  },
  getters: {
    formData: (state) => state.formData,
    Dates: (state) => state.Dates
  }
};
