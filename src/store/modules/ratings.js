import { getRatings } from "@/api/ratings.api.js";

export default {
  namespaced: true,
  state: {
    ratings: []
  },
  mutations: {
    setRatings(state, ratings) {
      state.ratings = ratings;
    }
  },
  actions: {
    async fetchRaitings({ commit }) {
      try {
        const response = await getRatings();
        commit("setRatings", response.data.result);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    ratings: (s) => s.ratings
  }
};
