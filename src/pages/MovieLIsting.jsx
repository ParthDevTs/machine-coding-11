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
                <h3 className="font-bold uppercase text-teal-400 drop-shadow-md">Movies</h3>
                <span className="flex items-center justify-center gap-2 group relative">
                    <label htmlFor="genres" >Genres: </label>
                    <span className="group relative text-right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                        </svg>

                        <select
                            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[8rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                            placeholder='Genres' value={genres} onChange={(e) => setGenres(e.target.value)} name="genres" id="genres">
                            <option value="All">All</option>
                        </select>
                    </span>
                </span>
                <span className="flex items-center justify-center gap-2 ">
                    <label htmlFor="releaseYeaer">Realease Year: </label>
                    <span className="group relative text-right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>

                        <select
                            className=" border-b px-4focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[8rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                            placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)} name="releaseYeaer" id="releaseYeaer">
                            <option value="All">All</option>
                            {releaseYearList.map((year, i) => {
                                return <option value={year} key={i}>{year}</option>
                            })}
                        </select>
                    </span>
                </span>
                <span className="flex items-center justify-center gap-2 ">
                    <label htmlFor="rating">Rating:</label>
                    <span className='group relative flex '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500">
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