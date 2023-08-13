import React from 'react'
import { useMovie } from '../context/movieContext'

function MovieTile({ movieDetail }) {
    const { addToWatchList, addToStarred, watchlist, starred, removeFromWatchlist, removeFromStarred } = useMovie()

    const existsInStarred = starred.find(movie => movie.id === movieDetail.id) ? true : false;
    const existsInWatchlist = watchlist.find(movie => movie.id === movieDetail.id) ? true : false;

    const watchlistHandler = (movie) => {
        existsInWatchlist ? removeFromWatchlist(movie) : addToWatchList(movie)
    }
    const starredHandler = (movie) => {
        existsInStarred ? removeFromStarred(movie) : addToStarred(movie)
    }
    return (
        <div className="movieTile border-b hover:shadow-md transition-shadow bg-white">
            <div className="flex font-sans">
                <div className="flex-none w-48 relative transition-all">
                    <img src={movieDetail.imageURL} alt={movieDetail.name} className="absolute hover:object-contain duration-200 transition-[object-fit] inset-0 w-full h-full object-cover" loading="lazy" />
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

                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button onClick={() => starredHandler(movieDetail)}
                                className={`h-10 px-2 font-semibold rounded-md bg-black ${existsInStarred ? "text-[#F5C518]" : "text-white"} shadow-sm w-[5rem] shadow-current justify-center flex items-center gap-1 transition-all duration-200`} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {existsInStarred ? "Starred" : "Star"}
                            </button>
                            <div className="spacer flex-grow"></div>
                            <button onClick={() => watchlistHandler(movieDetail)} className={`h-10 px-6 w-[12rem] font-semibold rounded-md border shadow-sm shadow-current ${existsInWatchlist ? "bg-[#F5C518] font-bold text-white" : "text-slate-900"} transition-all duration-200 border-slate-200 `} type="button">
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

export default MovieTile