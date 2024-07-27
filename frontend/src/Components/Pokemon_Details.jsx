//A Component to show the detail of each pokemon card
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Headings from "./Headings";
import Evolution_Details_Parent from "./Evolution_Details_Parent";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

const Pokemon_Details = () => {

  const { number } = useParams()
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {

    const fetchData = () => {
      axios.get(`/api/pokeinfo/${number}`)
        .then((response) => {
          setPokemon(response.data)
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    fetchData()

  }, [number])


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

    <div className="w-full min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

      <div className="w-full min-h-screen text-white">

        {/* The heading */}
        <Headings value={"PokéDex"} />

        {/* Pokeinfo */}
        <div className="w-full min-h-32 mt-20 flex justify-around py-2">

          {/* Type and Weakness */}
          <div className="flex flex-col gap-5">
            {/* Type */}
            <div className="flex flex-col gap-6 items-center bg-[#00091D] px-8 py-10 rounded-xl border border-zinc-600 shadow shadow-violet-600">
              {/* Text */}
              <div className="text-5xl text-blue-500">
                <h1 className="font-semibold">Type</h1>
              </div>

              {/* Type-Names */}
              <div className="flex gap-5">
                {/* TypeName-1 */}
                <div className="text-3xl">
                  <h1 className={`${pokemonTypeColors(pokemon.type1)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{pokemon.type1}</h1>
                </div>

                {/* TypeName-2 */}
                <div className="text-3xl">
                  <h1 className={`${pokemonTypeColors(pokemon.type2)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{pokemon.type2 || "NA"}</h1>
                </div>
              </div>

            </div>

            {/* Weakness */}
            <div className="flex flex-col gap-5 items-center bg-[#00091D] px-8 py-10 rounded-xl border border-zinc-600 shadow shadow-violet-600">

              <div className="text-5xl">
                <h1 className="text-blue-500">Weaknesses</h1>
              </div>

              <div className="w-[20vw] flex flex-wrap justify-start gap-2 text-xl">
                {pokemon.weakness && pokemon.weakness.map((weakness, index) => (
                  <div key={index} className={`${pokemonTypeColors(weakness)} px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>
                    {weakness}
                  </div>
                ))}
              </div>


            </div>

          </div>

          {/* Pokemon Image With Its Name And Number*/}
          <div className="flex flex-col items-center">

            {/* The number and name */}
            <div className="flex flex-col items-center">
              <div><h1 className="text-5xl text-blue-500 font-light">#{pokemon.number}</h1></div>

              <div><h1 className="glow text-6xl font-semibold">{pokemon.name}</h1></div>
            </div>

            {/* The image of pokemon */}
            <div className="w-[25vw] h-[25vw] relative rounded-full overflow-hidden flex items-center justify-center">
              {/* <img className="absolute z-0 brightness-75" src="/images/pokeball.png" alt="noimg" /> */}
              <img className={`${pokemonTypeBorder(pokemon.type1)} absolute w-[22vw] border-[6px] bg-zinc-900 rounded-full p-6`} src={pokemon.image} alt="notfound" />
            </div>

            {/* The arrow pointing downwards */}
            <div className="text-5xl text-zinc-400">
              <RiArrowDownDoubleFill />
            </div>

          </div>

          {/* The info and description */}
          <div className="flex flex-col gap-2">
            {/* Information */}
            <div className="w-[25vw] h-[20vw] flex flex-col justify-center gap-5 bg-[#00091D] px-8 py-10 rounded-xl border border-zinc-600 shadow shadow-violet-600">

              {/* Height */}
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-blue-500">Height:</h1>

                <h1 className="text-2xl">{pokemon.height}m</h1>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-blue-500">Category:</h1>
                <h1 className="text-2xl">{pokemon.category}</h1>
              </div>

              {/* Weight */}
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-blue-500">Weight:</h1>
                <h1 className="text-2xl">{pokemon.weight}kg</h1>
              </div>

              {/* Gender */}
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-blue-500">Gender:</h1>
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6" src={pokemon.gender1} alt="noimg" />
                  <h1 className="text-xl">/</h1>
                  <img className="w-6 h-6" src={pokemon.gender2} alt="noimg" />
                </div>
              </div>

              {/* Ability */}
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-blue-500">Ability:</h1>
                <h1 className="text-2xl">{pokemon.ability}</h1>
                <div className="text-xl text-amber-400 cursor-pointer"><FaQuestionCircle /></div>
              </div>

            </div>

            {/* Description */}
            <div className="w-[25vw] h-[17vw] flex flex-col justify-start gap-5 bg-[#00091D] p-4 rounded-xl border border-zinc-600 shadow shadow-violet-600">

              {/* Text */}
              <div className="text-3xl">
                <h1 className="text-blue-500 font-semibold">Description</h1>
              </div>

              {/* para */}
              <div>
                <p className="font-extralight">{pokemon.description}</p>
              </div>

            </div>
          </div>

        </div>

        {/* Evolution-Info */}
        <div className="w-full px-10 py-5 min-h-32 mt-20 flex">
          <Evolution_Details_Parent />
        </div>

      </div>

    </div>
  )
}
export default Pokemon_Details