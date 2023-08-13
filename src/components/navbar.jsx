import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useMovie } from '../context/movieContext';

function Navbar() {
    const { setSearchTerm, searchTerm } = useMovie()
    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "#F5C518" : "",
    });
    const navigate = useNavigate()
    return (
        <div className="w-full  px-4 flex h-20 items-center justify-between bg-white">
            <p className="uppercase bg-[#F5C518] font-black rounded px-2">IMDB</p>
            <div className="inputGroup group relative">
                <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input onClick={() => navigate("/")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[20rem] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search Movies" placeholder="Search Movies..."></input>
            </div>
            <div className="nav__group flex items-center justify-evenly gap-4">
                <NavLink className="font-bold drop-shadow" style={getActiveStyle} to={"/"}>Movies</NavLink>
                <NavLink className="font-bold drop-shadow" style={getActiveStyle} to={"/starred"}>Starred</NavLink>
                <NavLink className="font-bold drop-shadow" style={getActiveStyle} to={"/watchlist"}>Watchlist</NavLink>
            </div>
        </div>
    )
}

export default Navbar