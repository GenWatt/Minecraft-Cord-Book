const getters = {
    getCords: ({ cords }) => cords,
    getMessage: ({ alert }) => alert,
    getCord: ({ cords }) => payload => cords.filter(({ id }) => id === payload)[0],
    getSearch: ({ search }) => search,
    getShowForm: ({ showForm }) => showForm,
    getEdited: ({ edited }) => edited
}

export default getters;