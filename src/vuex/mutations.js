import { setLocalStorage } from "../util/setLocalStorage.js";

const mutations = {
    getAllCords: (state, payload) => (state.cords = payload),
    addCord: (state, payload) => {
        state.cords = [...state.cords, payload];
        setLocalStorage("cords", state.cords);
    },
    deleteCord: (state, payload) => {
        state.cords = state.cords.filter(({ id }) => id !== payload);
        setLocalStorage("cords", state.cords);
    },
    setMessage: (state, payload) => (state.alert = payload),
    closeMessage: state => (state.alert = { message: "", type: "" }),
    editCord: (state, payload) => {
        state.cords = state.cords.map(cord => (cord.id === payload.id ? payload : cord));
        setLocalStorage("cords", state.cords);
    },
    searchCord: (state, payload) => (state.search = payload),

}

export default mutations;