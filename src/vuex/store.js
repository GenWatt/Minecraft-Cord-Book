import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";

Vue.use(Vuex);
const state = {
    places: ['Earth', 'Nether', 'End'],
    currentPlace: 'earth',
    cords: {
        earth: [],
        nether: [],
        end: []
    },
    alert: {
        message: "",
        type: "",
    },
    search: "",
    edited: "",
    showForm: false
}

export const store = new Vuex.Store({
    state,
    mutations,
    getters,
});