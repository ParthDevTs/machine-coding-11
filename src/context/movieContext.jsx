import { createContext, useContext, useReducer, useState } from "react";
import { movies } from "../data/moviedb";
import { MovieReducer, actions } from "../reducer/movieReducer";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("")

    const initialMoveiData = {
        movieList: movies,
        watchlist: [],
        starred: [],
        ratingList: Array.from(new Set(movies.map((item) => item.rating))),
        releaseYearList: Array.from(new Set(movies.map((item) => item.year))),
        genresList: ['Drama', 'Crime', 'Action', 'Adventure', 'Fantasy', 'Romance', 'Sci-Fi', 'Biography']
    }


    const [movieState, dispatch] = useReducer(MovieReducer, initialMoveiData)

    const values = {
        ...movieState,
        addToWatchList: (movie) => {
            dispatch({ type: actions.ADD__TO__WATCHLIST, payload: movie })
        },
        removeFromWatchlist: (movie) => {
            dispatch({ type: actions.REMOVE__FROM__WATCHLIST, payload: movie })
        },
        addToStarred: (movie) => {
            dispatch({ type: actions.STAR__A__MOVIE, payload: movie })
        },
        removeFromStarred: (movie) => {
            dispatch({ type: actions.UNSTAR__A__MOVIE, payload: movie })
        },
        searchTerm,
        setSearchTerm
    }

    return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
}

export const useMovie = () => useContext(MovieContext)
