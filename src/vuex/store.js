import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";

Vue.use(Vuex);
const state = {
  cords: [],
  alert: {
    message: "",
    type: "",
  },
  search: "",
}

export const store = new Vuex.Store({
  state,
  mutations,
  getters,
});
