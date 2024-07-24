import React, { useState } from "react"
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900">

      {/* the bg-image */}
      <div className="w-full h-screen brightness-50">
        <img className="w-full h-full" src="/images/night-sky.jpg" alt="noimage" />
      </div>

      {/* Links */}
      <div className="absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-4">
        <div className="w-[12vw] flex flex-col items-center gap-6">
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex items-center justify-center text-white px-8 py-2 bg-[#1E1E4B] font-semibold" to="/pokedex">Pokédex</NavLink>
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex items-center justify-center text-white px-8 py-2 bg-[#1E1E4B] font-semibold" to="/moves">Moves</NavLink>
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex items-center justify-center text-white px-8 py-2 bg-[#1E1E4B] font-semibold" to="/abilities">Abilities</NavLink>
        </div>
        <div className="w-[12vw] flex flex-col items-center gap-6">
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex items-center justify-center text-white px-8 py-2 bg-[#1E1E4B] font-semibold" to="/items">Items</NavLink>
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex items-center justify-center text-white px-8 py-2 bg-[#1E1E4B] font-semibold" to="/locations">Locations</NavLink>
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex flex-col items-center justify-center text-white px-8 py-2 bg-[#1E1E4B] font-semibold leading-none" to="/gym-leaders-elite-four"><span>Gym Leaders-</span><span>Elite Four</span></NavLink>
        </div>
      </div>

      {/* image art */}
      <div className="w-full flex justify-center">
        <img className="absolute bottom-12 z-[1] w-fit h-44" src="/gifs/pikachu.gif" alt="no-image" />
        <img className="absolute bottom-0 z-[0] w-full h-[30vh]" src="/images/grass.png" alt="no-image" />
        {/* <img className="absolute z-[1] top-10 w-[15vw]" src="/gifs/charizard.gif" alt="noimg" /> */}
        <h1 className="welcome-text absolute z-0 top-[8.5vw] text-white text-8xl">WELCOME</h1>
      </div>

    </div>
  )
}
export default Home