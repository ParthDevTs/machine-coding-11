import React from 'react'
import MovieTile from '../components/MovieTile'
import { useMovie } from '../context/movieContext'

function Watchlist() {
    const { watchlist } = useMovie()
    return (
        <div className="MovieListingPage w-full min-h-[calc(100vh-4rem)] flex flex-col items-center gap-2 mt-5 ">

            <div className="movie__container grid grid-cols-2 gap-8 px-9 py-4">
                {watchlist.map((movie, i) => {
                    return <MovieTile movieDetail={movie} key={i} />
                })}
            </div>
        </div>
    )
}

export default Watchlist