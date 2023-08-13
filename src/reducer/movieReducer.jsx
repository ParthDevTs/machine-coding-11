


export const MovieReducer = (state, action) => {
    switch (action.type) {
        case "STAR__A__MOVIE":
            return { ...state, starred: [...state.starred, action.payload] }
        case "ADD__TO__WATCHLIST":
            return { ...state, watchlist: [...state.watchlist, action.payload] }
        case "REMOVE__FROM__WATCHLIST":
            return { ...state, watchlist: [...state.watchlist.filter(movie => movie.id !== action.payload.id)] }
        case "UNSTAR__A__MOVIE":
            return { ...state, starred: [...state.starred.filter(movie => movie.id !== action.payload.id)] }
        default:
            return state
    }
}

export const actions = {
    STAR__A__MOVIE: "STAR__A__MOVIE",
    ADD__TO__WATCHLIST: "ADD__TO__WATCHLIST",
    REMOVE__FROM__WATCHLIST: "REMOVE__FROM__WATCHLIST",
    UNSTAR__A__MOVIE: "UNSTAR__A__MOVIE"
}

