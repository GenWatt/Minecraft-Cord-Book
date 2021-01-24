const getters = {
    getCords: ({ cords }) => cords,
    getMessage: ({ alert }) => alert,
    getCord: (state) => payload => state.cords[state.currentPlace].filter(({ id }) => id === payload)[0],
    getSearch: ({ search }) => search,
    getShowForm: ({ showForm }) => showForm,
    getEdited: ({ edited }) => edited,
    getPlaces: ({ places }) => places,
    getCurrentPlace: ({ currentPlace }) => currentPlace
}

export default getters;