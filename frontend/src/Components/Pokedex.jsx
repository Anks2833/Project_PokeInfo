import React, { useEffect, useState } from "react"
import axios from "axios";
import { MdArrowDropDownCircle } from "react-icons/md";


const Pokedex = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {

    const fetchData = () => {
      axios.get('/api/pokedex')
        .then((response) => {
          setPokemon(response.data)
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    fetchData()

  }, [])


  return (


    <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="w-full min-h-screen text-white">


        {/* The heading */}
        <div className="w-full flex justify-center text-[2.5vw] text-white">
          <h1 className="link-text font-semibold bg-[#00091D] px-32 border-[2px] border-zinc-100 shadow-md shadow-teal-300 rounded-bl-full rounded-br-full">Pokédex</h1>
        </div>

        {/* pokemons */}
        <div className="w-full flex justify-center items-center gap-[1vw] px-20 mt-20">

          {/* First part */}
          <div className="flex items-center gap-2">
            <div>
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0" src="/images/zapdos.png" alt="notfound" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 w-28" src="/images/groudon.png" alt="notfound" />
              </div>

              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0" src="/images/hooh.png" alt="notfound" />
              </div>
            </div>

            <div>
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 left-2 w-24" src="/images/zekrom.png" alt="notfound" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 w-28" src="/images/dialga.png" alt="notfound" />
              </div>

              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 left-2 w-28" src="/images/darkrai.png" alt="notfound" />
              </div>
            </div>
          </div>

          {/* Second Part */}
          <div className="flex items-center justify-center">
            <div className="relative w-[16vw] h-[16vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
              <img className="mix-blend-overlay" src="/images/pokeball.png" alt="notfound" />
              <img className="absolute top-4" src="/images/arceus.png" alt="notfound" />
            </div>
          </div>

          {/* Third Part */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-5">
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 w-28" src="/images/entei.png" alt="notfound" />
              </div>

              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 left-3 w-24" src="/images/deoxys.png" alt="notfound" />
              </div>
            </div>

            <div>
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 w-32" src="/images/kyogre.png" alt="notfound" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 left-3 w-52" src="/images/raykuaza.png" alt="notfound" />
              </div>

              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-2 left-4 w-96" src="/images/mew.png" alt="notfound" />
              </div>
            </div>

            <div>
              <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="absolute top-0 w-96" src="/images/giratina.png" alt="notfound" />
              </div>
            </div>
          </div>

        </div>

        {/* Input search */}
        <div className="w-full flex flex-col items-center mt-20">

          <div className="w-[60vw] bg-[#00091D] border-[2px] border-zinc-100 shadow-md shadow-teal-300 rounded-tl-full rounded-tr-full py-10">
            <div className="">

              <form className="max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" className="w-full p-4 ps-10 text-sm text-black rounded-full bg-zinc-100" placeholder="Search by Name or Number" required />
                  <button type="submit" className="text-black absolute end-2.5 bottom-2.5 bg-teal-300 font-medium rounded-tr-full rounded-br-full text-sm px-6 py-2">Search</button>
                </div>
              </form>

            </div>

            <div className="w-full flex justify-center mt-5">
              <p>Use the Advanced Search to explore Pokémon by type, weakness, Ability and more!</p>
            </div>
          </div>

        </div>

        {/* Advanced search */}
        <div className="flex flex-col items-center justify-center">

          <div className="w-[60vw] min-h-32 border-[2px] border-zinc-100 shadow-md shadow-teal-300 bg-[#00091D] rounded-bl-full rounded-br-full flex flex-col items-center justify-center">
            <h1 className="text-5xl">Show Advanced Search</h1>
            <div className="mt-5 text-4xl">
              <MdArrowDropDownCircle />
            </div>
          </div>

          {/* <div className="w-[60vw] min-h-20 bg-red-600"></div> */}
        </div>

        {/* All pokemons */}
        <div className="w-full min-h-20 mt-20 flex flex-wrap justify-start px-10 gap-6 pb-10">

          {pokemon.map((poke, index) => {
            return (

              < div key={index} className="cursor-pointer w-[22vw] h-[35vw] bg-[#0A141E] border border-zinc-100 rounded-xl overflow-hidden shadow-sm shadow-zinc-100" >

                {/* Image div */}
                <div div className="relative w-full flex justify-center items-center" >
                  {/* <img className="absolute top-0" src="/images/pokedex.png" alt="" /> */}
                  <img className="absolute top-10 w-72 border-2 rounded-full shadow-md shadow-emerald-300" src={poke.image} alt="nonimg" />
                </div>

                {/* info div */}
                <div className="mt-80 flex flex-col items-start px-6">

                  {/* The name and number */}
                  <div className="flex flex-col py-4 text-4xl">
                    {/* The number */}
                    <div>
                      <h1 className="">#{poke.number}</h1>
                    </div>

                    {/* The name */}
                    <div>
                      <h1 className="font-semibold">{poke.name}</h1>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="w-full flex justify-center mt-2 gap-2">
                    <h1 className="text-2xl bg-emerald-600 px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner">{poke.type1}</h1>
                    <h1 className="text-2xl bg-fuchsia-600 px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner">{poke.type2}</h1>
                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div >
    </div >

  )
}
export default Pokedex