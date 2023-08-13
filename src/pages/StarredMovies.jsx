import React from 'react'
import { useMovie } from '../context/movieContext'
import MovieTile from '../components/MovieTile'

function StarredMovies() {
    const { starred } = useMovie()
    return (
        <div className="MovieListingPage min-h-[calc(100vh-4rem)]  w-full flex flex-col items-center gap-2 mt-5 ">

            <div className="movie__container grid grid-cols-2 gap-8 px-9 py-4">
                {starred.map((movie, i) => {
                    return <MovieTile movieDetail={movie} key={i} />
                })}
            </div>
        </div>
    )
}

export default StarredMovies