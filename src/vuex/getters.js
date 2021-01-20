const getters = {
    getCords: ({ cords }) => cords,
    getMessage: ({ alert }) => alert,
    getCord: ({ cords }) => payload => cords.filter(({ id }) => id === payload)[0],
    getSearch: ({ search }) => search,
}

export default getters;