import React from 'react'
import { useMovie } from '../context/movieContext'

function CreateNewMove({ setShowAddNewMovie }) {
    const { genresList } = useMovie()
    return (
        <div className="absolute h-[calc(100vh-6rem)] w-full bg-black/50 z-50 flex justify-center items-start py-5 ">
            <div className="newMovieDialogue p-10 rounded shadow-xl shadow-white/80 bg-white relative">
                <button onClick={() => setShowAddNewMovie(false)} className="absolute inset-5 w-10 h-10 bg-black text-[#F5C518] grid place-content-center rounded shadow-md hover:scale-95 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h1 className="text-2xl uppercase font-bold text-center drop-shadow-md font-mono">New Movie.</h1>
                <form className="grid grid-cols-2 mt-6 gap-y-2 gap-x-4 items-center">
                    <label className="font-mono text-sm" htmlFor="title">Name</label>
                    <input className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[20rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type="text" name="title" id="title" />
                    <label className="font-mono text-sm" htmlFor="year">Year</label>
                    <input className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[20rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type="numhber" name="year" id="year" />
                    <label className="font-mono text-sm" htmlFor="director">Director</label>
                    <input className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[20rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type="text" name="director" id="director" />
                    <label className="font-mono text-sm" htmlFor="imgURL">Image URL</label>
                    <input className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[20rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type="url" name="imgURL" id="imgURL" />
                    <label className="font-mono text-sm" htmlFor="writer">Writer</label>
                    <input className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[20rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type="text" name="writer" id="writer" />
                    <p className="font-mono text-sm">Select Genre</p>
                    <div className="genreSelect grid grid-cols-4 gap-x-4 gap-y-1 place-content-center max-w-[25rem]">
                        {genresList.map((genre, i) => {
                            return <div className={`${genre}checkbox flex gap-1 items-center justify-center `} key={i}> <label className='capitalize flex-grow' htmlFor={genre}>{genre}</label><input type="checkbox" name={genre} id={genre} /></div>
                        })}
                    </div>
                    <button className=" bg-black rounded font-mono font-bold py-2 mt-4 text-[#F5C518] hover:scale-95 transition shadow-lg shadow-slate-500" type="submit">Add Movie</button>
                    <button className="bg-red-500 shadow-lg shadow-red-400 rounded py-2 mt-4 text-white font-mono font-bold hover:scale-95 transition " type="reset">Reset</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNewMove