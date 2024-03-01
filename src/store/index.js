import { createStore } from "vuex";

export default createStore({
  state: { username: "", password: "" },
  getters: {},
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    clearCredentials(state) {
      state.username = "";
      state.password = "";
    },
  },
  actions: {},
  modules: {},
});
