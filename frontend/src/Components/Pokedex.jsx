import { useEffect, useState } from "react";
import axios from "axios";
import Headings from "./Headings";
import { NavLink } from "react-router-dom";
import { MdArrowDropDownCircle } from "react-icons/md";


const Pokedex = () => {

  const [pokemon, setPokemon] = useState([])
  // const [typesData, setTypesData] = useState([])

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

  function pokemonTypeColors(type) {
    if (type === "Grass") return "bg-[#7AC74C]";
    if (type === "Fire") return "bg-[#EE8130]";
    if (type === "Water") return "bg-[#6390F0]";
    if (type === "Electric") return "bg-[#F7D02C]";
    if (type === "Ground") return "bg-[#E2BF65]";
    if (type === "Rock") return "bg-[#B6A136]";
    if (type === "Fairy") return "bg-[#D685AD]";
    if (type === "Poison") return "bg-[#A33EA1]";
    if (type === "Bug") return "bg-[#A6B91A]";
    if (type === "Dragon") return "bg-[#6F35FC]";
    if (type === "Psychic") return "bg-[#F95587]";
    if (type === "Flying") return "bg-[#A98FF3]";
    if (type === "Fighting") return "bg-[#C22E28]";
    if (type === "Normal") return "bg-[#A8A77A]";
    if (type === "Ghost") return "bg-[#735797]";
    if (type === "Ice") return "bg-[#96D9D6]";
    if (type === "Dark") return "bg-[#705746]";
    if (type === "Steel") return "bg-[#B7B7CE]";
    return "bg-[#000]"; // Default bg color
  }

  function pokemonTypeShadow(type) {
    if (type === "Grass") return "shadow-[#7AC74C]";
    if (type === "Fire") return "shadow-[#EE8130]";
    if (type === "Water") return "shadow-[#6390F0]";
    if (type === "Electric") return "shadow-[#F7D02C]";
    if (type === "Ground") return "shadow-[#E2BF65]";
    if (type === "Rock") return "shadow-[#B6A136]";
    if (type === "Fairy") return "shadow-[#D685AD]";
    if (type === "Poison") return "shadow-[#A33EA1]";
    if (type === "Bug") return "shadow-[#A6B91A]";
    if (type === "Dragon") return "shadow-[#6F35FC]";
    if (type === "Psychic") return "shadow-[#F95587]";
    if (type === "Flying") return "shadow-[#A98FF3]";
    if (type === "Fighting") return "shadow-[#C22E28]";
    if (type === "Normal") return "shadow-[#A8A77A]";
    if (type === "Ghost") return "shadow-[#735797]";
    if (type === "Ice") return "shadow-[#96D9D6]";
    if (type === "Dark") return "shadow-[#705746]";
    if (type === "Steel") return "shadow-[#B7B7CE]";
    return "shadow-[#fff]"; // Default bg color
  }

  function pokemonTypeBorder(type) {
    if (type === "Grass") return "border-[#7AC74C]";
    if (type === "Fire") return "border-[#EE8130]";
    if (type === "Water") return "border-[#6390F0]";
    if (type === "Electric") return "border-[#F7D02C]";
    if (type === "Ground") return "border-[#E2BF65]";
    if (type === "Rock") return "border-[#B6A136]";
    if (type === "Fairy") return "border-[#D685AD]";
    if (type === "Poison") return "border-[#A33EA1]";
    if (type === "Bug") return "border-[#A6B91A]";
    if (type === "Dragon") return "border-[#6F35FC]";
    if (type === "Psychic") return "border-[#F95587]";
    if (type === "Flying") return "border-[#A98FF3]";
    if (type === "Fighting") return "border-[#C22E28]";
    if (type === "Normal") return "border-[#A8A77A]";
    if (type === "Ghost") return "border-[#735797]";
    if (type === "Ice") return "border-[#96D9D6]";
    if (type === "Dark") return "border-[#705746]";
    if (type === "Steel") return "border-[#B7B7CE]";
    return "bg-[#000]"; // Default bg color
  }


  return (

    <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="w-full min-h-screen text-white">


        {/* The heading */}
        <Headings value={"Pokédex"} />

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
        <div className="w-full min-h-20 mt-20 flex flex-wrap justify-start px-10 gap-6 pb-20">

          {pokemon.map((poke, index) => {
            return (

              <NavLink to={`/pokeinfo/${poke.number}`} key={index} className={`shadow-sm shadow-zinc-100 cursor-pointer w-[22vw] h-[35vw] bg-[#0A141E] border border-zinc-100 rounded-xl overflow-hidden`} >

                {/* Image div */}
                <div className="relative w-full flex justify-center items-center" >
                  {/* <img className="absolute top-0" src="/images/pokedex.png" alt="" /> */}
                  <img className={`${pokemonTypeShadow(poke.type1)} ${pokemonTypeBorder(poke.type1)} absolute top-10 w-72 border rounded-full shadow-md`} src={poke.image} alt="nonimg" />
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
                  <div className="w-full flex justify-center items-center mt-2 gap-2">
                    <div className="w-1/2 flex justify-center items-center">
                      <h1
                        className={
                          `${pokemonTypeColors(poke.type1)}
                        text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`
                        }>
                        {poke.type1}
                      </h1>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                      <h1 className={`${pokemonTypeColors(poke.type2)} ${poke.type2 ? "text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner" : "text-2xl border border-white px-10 py-2 rounded-full"}`}>{poke.type2 || "NA"}</h1>
                    </div>
                  </div>

                </div>

              </NavLink>
            )
          })}

        </div>

      </div >
    </div >

  )
}

export default Pokedex

// bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]