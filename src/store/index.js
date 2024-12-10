import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT(state) {
      state.counter++
    },
    DECREMENT(state) {
      state.counter--
    }
  },
  actions: {
    increment({ commit }) {
      commit('INCREMENT')
    },
    decrement({ commit }) {
      commit('DECREMENT')
    }
  },
  getters: {
    getCounter: state => state.counter
  }
})