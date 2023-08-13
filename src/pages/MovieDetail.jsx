import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMovie } from '../context/movieContext'

function MovieDetail() {
    const { movieList, addToWatchList, addToStarred, watchlist, starred, removeFromWatchlist, removeFromStarred } = useMovie();
    const { id } = useParams()
    const movieDetail = movieList.find(movie => movie.id === parseInt(id))
    const navigate = useNavigate();
    const existsInStarred = starred.find(movie => movie.id === movieDetail.id) ? true : false;
    const existsInWatchlist = watchlist.find(movie => movie.id === movieDetail.id) ? true : false;

    const watchlistHandler = (movie) => {

        existsInWatchlist ? removeFromWatchlist(movie) : addToWatchList(movie)
    }
    const starredHandler = (movie) => {

        existsInStarred ? removeFromStarred(movie) : addToStarred(movie)
    }
    return (
        <div className=" min-h-[calc(100vh-4rem)]  w-full flex flex-col items-center gap-2 mt-5 justify-center relative">
            <button onClick={() => navigate(-1)} className="absolute inset-x-10 inset-y-2  bg-black h-10 w-20 rounded text-[#F5C518]  shadow-lg shadow-slate-500 font-mono uppercase hover:scale-95 transition">Back</button>

            <div className="flex font-sans bg-white rounded shadow-md">
                <div className="flex-none w-48 relative transition-all">
                    <img src={movieDetail.imageURL} alt={movieDetail.name} className="absolute hover:scale-95 duration-200 transition-all inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-auto p-6 ">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {movieDetail.title}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            <span className="group relative flex drop-shadow-md items-center bg-[#F5C518]  rounded px-2 text-black font-bold">
                                {movieDetail.rating}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </span>
                        </div>

                    </div>
                    <div className="flex items-baseline mt-8 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm min-h-10">
                            {movieDetail.summary}
                        </div>
                    </div>
                    <div className="details flex flex-col gap-2 my-8">
                        <div className="infogrp w-full flex gap-4">
                            <p className=' w-20 font-semibold font-mono'>Year:</p>
                            <p>{movieDetail.year}</p>
                        </div>
                        <div className="infogrp w-full flex gap-4">
                            <p className=' w-20 font-semibold font-mono'>Writer:</p>
                            <p>{movieDetail.writer}</p>
                        </div>
                        <div className="infogrp w-full flex gap-4">
                            <p className=' w-20 font-semibold font-mono'>Genre:</p>
                            <p>{movieDetail.genre.map(genre => `${genre} `)}</p>
                        </div>
                        <div className="infogrp w-full flex gap-4">
                            <p className=' w-20 font-semibold font-mono'>Cast:</p>
                            <p>{movieDetail.cast.map(cast => `${cast}  `)}</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button onClick={(e) => {
                                e.stopPropagation()
                                starredHandler(movieDetail)
                            }}
                                className={`h-10 px-2 font-semibold rounded-md bg-black ${existsInStarred ? "text-[#F5C518]" : "text-white"} shadow-sm w-[5rem] shadow-current justify-center flex items-center gap-1 transition-all duration-200`} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {existsInStarred ? "Starred" : "Star"}
                            </button>
                            <div className="spacer flex-grow"></div>
                            <button onClick={(e) => {
                                e.stopPropagation()
                                watchlistHandler(movieDetail)
                            }} className={`h-10 px-6 w-[12rem] font-semibold rounded-md border shadow-sm shadow-current ${existsInWatchlist ? "bg-[#F5C518] font-bold text-white" : "text-slate-900"} transition-all duration-200 border-slate-200 `} type="button">
                                {existsInWatchlist ? "Added To WatchList" : "Add to Wachlist"}
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-slate-700 italic">
                        DirectedBy: {movieDetail.director}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail