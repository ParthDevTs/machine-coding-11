import React, { useState } from 'react'
import { useMovie } from '../context/movieContext'
import MovieTile from '../components/MovieTile'

function MovieLIsting() {
    const { movieList, searchTerm, ratingList, releaseYearList } = useMovie()
    const [genres, setGenres] = useState("All")
    const [year, setYear] = useState("All")
    const [rating, setRating] = useState("All")
    // const [showAddNewMovie, setShowAddNewMovie] = useState(false)


    return (
        <div className="MovieListingPag min-h-[calc(100vh-4rem)] e w-full flex flex-col items-center gap-2 mt-5 ">
            <div className="filter__bar container w-full flex items-center justify-between px-4 py-2 shadow bg-white rounded" >
                <h3>Movies</h3>
                <span className="flex items-center justify-center gap-2 group relative">
                    <label htmlFor="genres" >Genres: </label>
                    <select
                        className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[8rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                        placeholder='Genres' value={genres} onChange={(e) => setGenres(e.target.value)} name="genres" id="genres">
                        <option value="All">All</option>
                    </select>
                </span>
                <span className="flex items-center justify-center gap-2 group relative">
                    <label htmlFor="releaseYeaer">Realease Year: </label>
                    <select
                        className=" border-b px-4focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[8rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                        placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)} name="releaseYeaer" id="releaseYeaer">
                        <option value="All">All</option>
                        {releaseYearList.map((year, i) => {
                            return <option value={year} key={i}>{year}</option>
                        })}
                    </select>
                </span>
                <span className="flex items-center justify-center gap-2 ">
                    <label htmlFor="rating">Rating:</label>
                    <span className='group relative flex '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 -mt-3.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <select
                            className="border-b px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[8rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                            placeholder='Rating' value={rating} onChange={(e) => setRating(e.target.value)} name="rating" id="rating">
                            <option value="All">All</option>
                            {ratingList.map((rating, i) => {
                                return <option value={rating} key={i}>{rating}</option>
                            })}
                        </select>

                    </span>
                </span>
                <button className="text-sm bg-[#F5C518] px-2 py-1 rounded shadow-md font-bold shadow-[#F5C518] hover:scale-95 transition">Add A Movie</button>
            </div>
            <div className="movie__container grid grid-cols-2 gap-8 px-9 py-4">
                {movieList.filter((movie) => {
                    if (searchTerm.length === 0) {
                        return true
                    } else {
                        return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.director.toLowerCase().includes(searchTerm.toLowerCase()) || movie.writer.toLowerCase().includes(searchTerm.toLowerCase())
                    }
                }).filter((movie) => {
                    switch (genres) {
                        case "All":
                            return true;
                        default: return movie.genre.find((genre) => genre === genres) ? true : false
                    }
                })
                    .filter((movie) => {
                        switch (year) {
                            case "All":
                                return true;
                            default: return movie.year === parseInt(year)
                        }
                    })
                    .filter((movie) => {
                        switch (rating) {
                            case "All":
                                return true;
                            default: return movie.rating >= rating
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