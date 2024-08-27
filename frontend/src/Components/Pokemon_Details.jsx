//A Component to show the detail of each pokemon card
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"
import axios from "axios";
import { NavLink, useParams, useLocation } from 'react-router-dom';
import Headings from "./Headings";
import Evolution_Details_Parent from "./Evolution_Details_Parent";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import Stats from "./Stats";
import Heading_Mobile from "./Heading_Mobile";

const Pokemon_Details = () => {

  const controls = useAnimation();
  const location = useLocation();

  const variants = {
    hidden: { opacity: 0 }, // Start position off-screen and transparent
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1 // Base delay for the first item
      }
    },
  };

  const inViewVariants = {
    hidden: { y: 50, opacity: 0 },
    inView: { y: 0, opacity: 1 }
  }

  const { number } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [ability, setAbility] = useState()

  const [showAbility, setShowAbility] = useState(false);
  const abilityVisibility = () => {
    setShowAbility(!showAbility); // Toggles the state between true and false
  }


  useEffect(() => {
    controls.start('visible');
  }, [location.pathname]); // Re-run the effect when the route changes

  useEffect(() => {

    const fetchData = () => {
      axios.get(`https://project-pokeinfo.onrender.com/api/pokeinfo/${number}`)
        .then((response) => {
          setPokemon(response.data)
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    fetchData()

  }, [number])

  //Fetch ability data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://project-pokeinfo.onrender.com/api/ability`);
        const foundAbility = response.data.find(ability => ability.number === number);
        if (foundAbility) {
          setAbility([foundAbility]); // Assuming stats per Pokémon are unique, wrap in an array
        } else {
          throw new Error('No Ability Description found for this Pokémon.');
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [number]);


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

  function pokemonTextColors(type) {

    if (type === "Grass") return "text-[#7AC74C]";
    if (type === "Fire") return "text-[#EE8130]";
    if (type === "Water") return "text-[#6390F0]";
    if (type === "Electric") return "text-[#F7D02C]";
    if (type === "Ground") return "text-[#E2BF65]";
    if (type === "Rock") return "text-[#B6A136]";
    if (type === "Fairy") return "text-[#D685AD]";
    if (type === "Poison") return "text-[#A33EA1]";
    if (type === "Bug") return "text-[#A6B91A]";
    if (type === "Dragon") return "text-[#6F35FC]";
    if (type === "Psychic") return "text-[#F95587]";
    if (type === "Flying") return "text-[#A98FF3]";
    if (type === "Fighting") return "text-[#C22E28]";
    if (type === "Normal") return "text-[#A8A77A]";
    if (type === "Ghost") return "text-[#735797]";
    if (type === "Ice") return "text-[#96D9D6]";
    if (type === "Dark") return "text-[#705746]";
    if (type === "Steel") return "text-[#B7B7CE]";
    return "text-[#000]"; // Default bg color

  }

  return (

    <div className="relative min-h-screen w-full bg-black">
      <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="w-full min-h-screen text-white">

          {/* The heading */}
          <Headings value={"PokéDex"} />

          {/* Header for mobile devices */}
          <Heading_Mobile name={"Pokémon Detail"} to={"/pokedex"} />

          {/* Pokeinfo */}
          <div className="w-full min-h-32 mt-20 hidden sm:flex justify-around py-2">

            {/* Type and Weakness */}
            <div className="flex flex-col gap-5">
              {/* Type */}
              <motion.div
                variants={{
                  ...variants,
                  visible: {
                    ...variants.visible,
                    transition: {
                      ...variants.visible.transition,
                      delay: 0.4 // Increment delay for the second item
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6 items-center bg-[#00091D] px-8 py-10 rounded-xl border border-zinc-600 shadow shadow-violet-600"
              >
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

              </motion.div>

              {/* Weakness */}
              <motion.div
                variants={{
                  ...variants,
                  visible: {
                    ...variants.visible,
                    transition: {
                      ...variants.visible.transition,
                      delay: 0.5 // Increment delay for the second item
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5 items-center bg-[#00091D] px-8 py-10 rounded-xl border border-zinc-600 shadow shadow-violet-600"
              >

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


              </motion.div>

            </div>

            {/* Pokemon Image With Its Name And Number*/}
            <div className="flex flex-col items-center">

              {/* The number and name */}
              <div className="flex flex-col items-center">
                <motion.h1
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl text-white font-semibold"
                >
                  #{pokemon.number}
                </motion.h1>

                <motion.h1
                  variants={{
                    ...variants,
                    visible: {
                      ...variants.visible,
                      transition: {
                        ...variants.visible.transition,
                        delay: 0.2 // Increment delay for the second item
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="pokemon-name-text text-6xl font-semibold"
                >
                  {pokemon.name}
                </motion.h1>
              </div>

              {/* The image of pokemon */}
              <div className="w-[25vw] h-[25vw] relative rounded-full overflow-hidden flex items-center justify-center">
                <motion.img
                  variants={{
                    ...variants,
                    visible: {
                      ...variants.visible,
                      transition: {
                        ...variants.visible.transition,
                        delay: 0.3 // Increment delay for the second item
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  className={`${pokemonTypeBorder(pokemon.type1)} absolute w-[22vw] border-[6px] bg-zinc-900 rounded-full p-6`}
                  src={pokemon.image}
                  alt="notfound"
                />
              </div>

              {/* The arrow pointing downwards */}
              <motion.div
                className="text-5xl text-zinc-400"
                animate={{
                  y: [0, 60, 0], // Move downwards 100 units and then back to original position
                  scale: [1, 1.2, 1] // Start at normal size, shrink to half size, then return to normal size
                }}
                transition={{
                  duration: 2, // Duration of the animation in seconds
                  ease: "easeInOut", // Easing function for smoothness
                  repeat: Infinity, // Repeat the animation indefinitely
                  repeatType: "reverse" // Reverse the animation on each iteration
                }}
              >
                <RiArrowDownDoubleFill />
              </motion.div>

            </div>

            {/* The info and description and ability */}
            <div className="relative overflow-hidden">

              {/* The ability */}
              {ability && (
                <div
                  className={`absolute w-[25vw] h-[20vw] ${showAbility ? "translate-x-0 transition-all" : "-translate-x-[28vw] transition-all"} flex flex-col justify-start  bg-[#00091D] px-8 py-20 rounded-xl border border-zinc-600 shadow shadow-violet-600`}
                >
                  <div>
                    <div
                      onClick={abilityVisibility}
                      className="absolute top-6 left-5 text-2xl cursor-pointer"
                    >
                      <FaArrowLeft />
                    </div>

                    <div className="absolute top-5 right-[50%] translate-x-[50%] text-2xl">
                      <h1 className="font-semibold">Ability: <span className={`${pokemonTextColors(pokemon.type1)}`}>{pokemon.ability}</span></h1>
                    </div>
                  </div>

                  {/* Ability description */}
                  <div className="w-full">
                    <p className="text-xl font-light">{ability[0]?.ability}</p>
                  </div>
                </div>
              )}

              {/* The info and description */}
              <div className="flex flex-col gap-2">
                {/* Information */}
                <motion.div
                  variants={{
                    ...variants,
                    visible: {
                      ...variants.visible,
                      transition: {
                        ...variants.visible.transition,
                        delay: 0.6 // Increment delay for the second item
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="w-[25vw] h-[20vw] flex flex-col justify-center gap-5 bg-[#00091D] px-5 py-10 rounded-xl border border-zinc-600 shadow shadow-violet-600"
                >

                  {/* Height */}
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-blue-500">Height:</h1>

                    <h1 className="text-2xl">{pokemon.height}m</h1>
                  </div>

                  {/* Category */}
                  <div className="w-full flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-blue-500">Category:</h1>
                    <h1 className="text-2xl">{pokemon.category} Pokémon</h1>
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
                    <div
                      onClick={abilityVisibility}
                      className="text-xl text-amber-400 cursor-pointer"
                    >
                      <FaQuestionCircle />
                    </div>
                  </div>

                </motion.div>

                {/* Description */}
                <motion.div
                  variants={{
                    ...variants,
                    visible: {
                      ...variants.visible,
                      transition: {
                        ...variants.visible.transition,
                        delay: 0.7 // Increment delay for the second item
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="w-[25vw] h-[17vw] flex flex-col justify-start gap-5 bg-[#00091D] p-4 rounded-xl border border-zinc-600 shadow shadow-violet-600"
                >

                  {/* Text */}
                  <div className="text-3xl">
                    <h1 className="text-blue-500 font-semibold">Description</h1>
                  </div>

                  {/* para */}
                  <div>
                    <p className="font-extralight">{pokemon.description}</p>
                  </div>

                </motion.div>
              </div>

            </div>

          </div>

          {/* Pokeinfo for mobile */}
          <div className="w-full min-h-32 pt-24 sm:hidden flex flex-col gap-5 justify-around py-2">

            {/* Pokemon Image With Its Name And Number*/}
            <div className="flex flex-col items-center">

              {/* The image of pokemon */}
              <div className="w-[50vw] h-[50vw] relative rounded-full overflow-hidden flex items-center justify-center">
                <img className={`${pokemonTypeBorder(pokemon.type1)} absolute w-full h-full border-2 bg-zinc-900 rounded-full p-6`} src={pokemon.image} alt="notfound" />
              </div>

              {/* The number, name and Type-Names  */}
              <div className="flex flex-col items-center pt-2">
                <h1 className="text-3xl text-white font-semibold">#{pokemon.number}</h1>
                <h1 className="pokemon-name-text text-4xl font-semibold">{pokemon.name}</h1>
              </div>

              {/* Type-Names */}
              <div className="flex justify-center gap-1 pt-4">
                {/* TypeName-1 */}
                <div className="">
                  <h1 className={`${pokemonTypeColors(pokemon.type1)} text-sm px-10 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner`}>{pokemon.type1}</h1>
                </div>

                {/* TypeName-2 */}
                <div className="">
                  <h1 className={`${pokemonTypeColors(pokemon.type2)} text-sm px-10 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner`}>{pokemon.type2 || "NA"}</h1>
                </div>
              </div>
            </div>

            {/* Weakness */}
            <div className="w-full flex flex-col justify-start gap-4 items-center py-3">

              <div className="w-full flex justify-start items-end gap-1 pl-2 border-b border-b-zinc-600">
                <div className="text-3xl"><MdOutlineDoubleArrow /></div>
                <h1 className="text-blue-500 text-3xl">Weaknesses</h1>
              </div>

              <div className="flex flex-wrap justify-start gap-1 text-sm">
                {pokemon.weakness && pokemon.weakness.map((weakness, index) => (
                  <div key={index} className={`${pokemonTypeColors(weakness)} px-5 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner`}>
                    {weakness}
                  </div>
                ))}
              </div>
            </div>

            {/* The info and description */}
            <div className="flex flex-col gap-5">
              {/* Information */}
              <div className="w-full flex flex-col justify-start gap-2 items-center py-3">

                {/* Text */}
                <div className="w-full flex justify-start items-end gap-1 pl-2 border-b border-b-zinc-600">
                  <div className="text-3xl"><MdOutlineDoubleArrow /></div>
                  <h1 className="text-blue-500 text-3xl">Information</h1>
                </div>

                {/* Height */}
                <div className="w-full flex items-center gap-2 px-4">
                  <h1 className="text-md font-bold text-blue-500">Height:</h1>

                  <h1 className="text-md">{pokemon.height}m</h1>
                </div>

                {/* Category */}
                <div className="w-full flex items-center gap-2 px-4">
                  <h1 className="text-md font-bold text-blue-500">Category:</h1>
                  <h1 className="text-md">{pokemon.category} Pokémon</h1>
                </div>

                {/* Weight */}
                <div className="w-full flex items-center gap-2 px-4">
                  <h1 className="text-md font-bold text-blue-500">Weight:</h1>
                  <h1 className="text-md">{pokemon.weight}kg</h1>
                </div>

                {/* Gender */}
                <div className="w-full flex items-center gap-2 px-4">
                  <h1 className="text-md font-bold text-blue-500">Gender:</h1>

                  {pokemon.gender1 || pokemon.gender2 === "" ?
                    <h1>Unknown</h1> :
                    <div className="flex items-center gap-2">
                      <img className="w-3 h-3" src={pokemon.gender1} alt="noimg" />
                      <h1 className="text-md">/</h1>
                      <img className="w-3 h-3" src={pokemon.gender2} alt="noimg" />
                    </div>
                  }

                </div>

                {/* Ability */}
                <div className="w-full flex items-center gap-2 px-4">
                  <h1 className="text-md font-bold text-blue-500">Ability:</h1>
                  <h1 className="text-md">{pokemon.ability}</h1>
                  <div className="text-sm text-amber-400 cursor-pointer"><FaQuestionCircle /></div>
                </div>

              </div>

              {/* Description */}
              <div className="w-full flex flex-col justify-start gap-2 items-center py-3">

                {/* Text */}
                <div className="w-full flex justify-start items-end gap-1 pl-2 border-b border-b-zinc-600">
                  <div className="text-3xl"><MdOutlineDoubleArrow /></div>
                  <h1 className="text-blue-500 text-3xl">Description</h1>
                </div>

                {/* para */}
                <div className="w-full pl-3 pr-10 flex justify-start">
                  <p className="font-extralight">{pokemon.description}</p>
                </div>

              </div>
            </div>

          </div>

          {/* Stats */}
          <motion.div
            variants={inViewVariants}
            initial="hidden"
            whileInView="inView"
            className="w-full py-5 min-h-32 sm:px-10 sm:mt-20 flex"
          >
            <Stats number={number} />
          </motion.div>

          {/* Evolution-Info */}
          <motion.div
            variants={inViewVariants}
            initial="hidden"
            whileInView="inView"
            className="w-full py-5 min-h-32 px-0 sm:px-10 sm:mt-20 flex"
          >
            <Evolution_Details_Parent number={number} />
          </motion.div>

        </div>

        {/* Navlink to pokedex */}
        <div className="w-full text-white py-10 hidden sm:flex items-center justify-center">
          <NavLink to="/pokedex" className="arrow bg-indigo-600 flex items-center justify-center font-semibold cursor-pointer pl-40 text-3xl hover:translate-x-[-0.2vw] transition-all">Back To Pokedex</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Pokemon_Details