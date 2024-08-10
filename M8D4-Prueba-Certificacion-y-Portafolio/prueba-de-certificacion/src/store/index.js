import { createStore } from 'vuex';

export default createStore({
  state: {
    items: [],
  },
  getters: {
    items: (state) => state.items,
    totalItems: (state) => {
      return state.items.length;
    },
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item);
    },
  },
  modules: {},
});
