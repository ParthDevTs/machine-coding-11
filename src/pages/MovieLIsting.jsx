import React, { useState } from 'react'
import { useMovie } from '../context/movieContext'
import MovieTile from '../components/MovieTile'

function MovieLIsting() {
    const { movieList, searchTerm, ratingList, releaseYearList } = useMovie()
    const [genres, setGenres] = useState("All")
    const [year, setYear] = useState("All")
    const [rating, setRating] = useState("All")


    return (
        <div className="MovieListingPag min-h-[calc(100vh-4rem)] e w-full flex flex-col items-center gap-2 mt-5 ">
            <div className="filter__bar container w-full flex items-center justify-between px-4 py-2 shadow bg-white rounded" >
                <h3>Movies</h3>
                <span className="flex items-center justify-center gap-2">
                    <label htmlFor="genres" >Genres: </label>
                    <select className="border-b px-4" placeholder='Genres' value={genres} onChange={(e) => setGenres(e.target.value)} name="genres" id="genres">
                        <option value="All">All</option>
                    </select>
                </span>
                <span className="flex items-center justify-center gap-2">
                    <label htmlFor="releaseYeaer">Realease Year: </label>
                    <select className="border-b px-4" placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)} name="releaseYeaer" id="releaseYeaer">
                        <option value="All">All</option>
                        {releaseYearList.map((year, i) => {
                            return <option value={year} key={i}>{year}</option>
                        })}
                    </select>
                </span>
                <span className="flex items-center justify-center gap-2">
                    <label htmlFor="rating">Rating:</label>
                    <select className="border-b px-4" placeholder='Rating' value={rating} onChange={(e) => setRating(e.target.value)} name="rating" id="rating">
                        <option value="All">All</option>
                        {ratingList.map((rating, i) => {
                            return <option value={rating} key={i}>{rating}</option>
                        })}
                    </select>
                </span>
                <button className="text-sm bg-[#F5C518] px-2 py-1 rounded shadow-md font-bold shadow-[#F5C518]">Add A Movie</button>
            </div>
            <div className="movie__container grid grid-cols-2 gap-8 px-9 py-4">
                {movieList.filter((movie) => {
                    if (searchTerm.length === 0) {
                        return true
                    } else {
                        return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.director.toLowerCase().includes(searchTerm.toLowerCase()) || movie.writer.toLowerCase().includes(searchTerm.toLowerCase())
                    }
                })
                    .map((movie, i) => {
                        return <MovieTile movieDetail={movie} key={i} />
                    })}
            </div>
        </div>
    )
}

export default MovieLIsting