import { setLocalStorage } from "../util/setLocalStorage.js";

const mutations = {
    getAllCords: (state, payload) => {
        if (payload)
            state.cords = payload || []
    },
    addCord: (state, payload) => {
        state.cords[state.currentPlace] = [...state.cords[state.currentPlace], payload];
        setLocalStorage("cords", state.cords);
    },
    deleteCord: (state, payload) => {
        state.cords[state.currentPlace] = state.cords[state.currentPlace].filter(({ id }) => id !== payload);
        setLocalStorage("cords", state.cords);
    },
    setMessage: (state, payload) => (state.alert = payload),
    closeMessage: state => (state.alert = { message: "", type: "" }),
    editCord: (state, payload) => {
        state.cords[state.currentPlace] = state.cords[state.currentPlace].map(cord => (cord.id === payload.id ? payload : cord));
        setLocalStorage("cords", state.cords);
    },
    searchCord: (state, payload) => (state.search = payload),
    toggleForm: (state) => state.showForm = !state.showForm,
    editedCord: (state, payload) => state.edited = payload,
    setPlace: (state, payload) => state.currentPlace = payload.toLowerCase(),
}

export default mutations;