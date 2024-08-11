import { useEffect, useState } from "react";
import axios from "axios";
import Headings from "./Headings";
import { NavLink } from "react-router-dom";
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Charizard from '../../public/Charizard'


const Pokedex = () => {

  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false); //State for toggle
  const [imageUrls, setImageUrls] = useState([]);
  const [bgColor, setBgColor] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedTypeColor, setSelectedTypeColor] = useState('');

  // To fetch pokemon data of all pokemons
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

  // To fetch random pokemon images
  useEffect(() => {
    axios.get('/api/pokedex/randomimage')
      .then((response) => {
        setImageUrls(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);

  //To toggle the advanced search dropdown
  const toggleAdvancedSearch = () => {    //Toggle function
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() !== '') {
      setIsSearchMode(true);
    } else {
      setIsSearchMode(false);
    }
  };

  //To filter out pokemons based on name and number
  const filteredPokemonList = pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.number.toString().includes(searchTerm)
  );

  // Function to handle type selection
  const handleTypeClick = (type) => {
    setSelectedType(type.type);
    const bgColorClass = pokemonTypeColors(type.type); // Get the background color class for the selected type
    setSelectedTypeColor(bgColorClass); // Update the state with the background color class
  };

  // Function to handle reset
  const handleReset = () => {
    setSelectedType('');
    setSelectedTypeColor('');
  };


  const typesData = [
    { type: "Grass", color: "#7AC74C" },
    { type: "Fire", color: "#EE8130" },
    { type: "Water", color: "#6390F0" },
    { type: "Normal", color: "#A8A77A" },
    { type: "Electric", color: "#F7D02C" },
    { type: "Ice", color: "#96D9D6" },
    { type: "Fighting", color: "#C22E28" },
    { type: "Poison", color: "#A33EA1" },
    { type: "Ground", color: "#E2BF65" },
    { type: "Flying", color: "#A98FF3" },
    { type: "Psychic", color: "#F95587" },
    { type: "Bug", color: "#A6B91A" },
    { type: "Rock", color: "#B6A136" },
    { type: "Ghost", color: "#735797" },
    { type: "Dragon", color: "#6F35FC" },
    { type: "Dark", color: "#705746" },
    { type: "Steel", color: "#B7B7CE" },
    { type: "Fairy", color: "#D685AD" },
  ]

  const areaData = [
    { name: "Kanto" },
    { name: "Johto" },
    { name: "Hoenn" },
    { name: "Sinnoh" },
    { name: "Unova" },
  ]

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

    <div className="relative min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden">
      <div className="w-full min-h-screen text-white">


        {/* The heading */}
        <Headings value={"Pokédex"} />

        {/* pokemons */}
        {imageUrls.length > 0 && (
          <div className="w-full flex justify-center items-center gap-[1vw] px-20 mt-20">

            {/* First part */}
            <div className="flex items-center gap-2">

              <NavLink to={`/pokeinfo/${imageUrls[0].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="w-full h-full absolute top-0 left-0" src={imageUrls[0].image} alt="notfound" />
              </NavLink>

              <div className="flex flex-col gap-5">
                <NavLink to={`/pokeinfo/${imageUrls[1].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[1].image} alt="notfound" />
                </NavLink>

                <NavLink to={`/pokeinfo/${imageUrls[2].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[2].image} alt="notfound" />
                </NavLink>
              </div>


              <NavLink to={`/pokeinfo/${imageUrls[3].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                <img className="w-full h-full absolute top-0 left-0" src={imageUrls[3].image} alt="notfound" />
              </NavLink>


              <div className="flex flex-col gap-5">
                <NavLink to={`/pokeinfo/${imageUrls[4].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[4].image} alt="notfound" />
                </NavLink>

                <NavLink to={`/pokeinfo/${imageUrls[5].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[5].image} alt="notfound" />
                </NavLink>
              </div>
            </div>

            {/* Second Part */}
            <NavLink to={`/pokeinfo/${imageUrls[6].number}`} className="flex items-center justify-center">
              <div className="relative w-[16vw] h-[16vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                <img className="mix-blend-overlay" src="/images/pokeball.png" alt="notfound" />
                <img className="w-full h-full absolute top-0 left-0" src={imageUrls[6].image} alt="notfound" />
              </div>
            </NavLink>

            {/* Third Part */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-5">
                <NavLink to={`/pokeinfo/${imageUrls[7].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[7].image} alt="notfound" />
                </NavLink>

                <NavLink to={`/pokeinfo/${imageUrls[8].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[8].image} alt="notfound" />
                </NavLink>
              </div>

              <NavLink to={`/pokeinfo/${imageUrls[9].number}`}>
                <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[9].image} alt="notfound" />
                </div>
              </NavLink>

              <div className="flex flex-col gap-5">
                <NavLink to={`/pokeinfo/${imageUrls[10].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[10].image} alt="notfound" />
                </NavLink>

                <NavLink to={`/pokeinfo/${imageUrls[11].number}`} className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[11].image} alt="notfound" />
                </NavLink>
              </div>

              <NavLink to={`/pokeinfo/${imageUrls[12].number}`}>
                <div className="relative w-[8vw] h-[8vw] border-2 border-teal-200 shadow-md shadow-emerald-300 rounded-full">
                  <img className="mix-blend-soft-light" src="/images/pokeball.png" alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[12].image} alt="notfound" />
                </div>
              </NavLink>
            </div>

          </div>
        )}


        <div className='w-fit h-[80vh] absolute translate-x-[0%] translate-y-[0%] z-10'>
          <Canvas>
            <ambientLight intensity={5} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true} // Enable automatic rotation
              autoRotateSpeed={2} // Speed of automatic rotation
              autoRotateAxis={[1, 0, 0]} // Rotate around the X-axis
            />
            <Suspense fallback={null}>
              <Charizard />
            </Suspense>
          </Canvas>
        </div>

        {/* Input search */}
        <div className="w-full flex flex-col items-center mt-20">

          <div className="w-[60vw] bg-[#00091D] border-[2px] border-zinc-100 shadow-md shadow-teal-300 rounded-tl-full rounded-tr-full py-10">
            <div className="">

              <form className="max-w-md mx-auto" value={searchTerm} onChange={handleSearchChange}>
                <div className="relative">
                  {/* The svg */}
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  {/* The input box */}
                  <input
                    type="search"
                    className="w-full p-4 ps-10 text-sm border border-zinc-100 rounded-full bg-[#00091D] caret-white text-white"
                    placeholder="Search by Name or Number"
                    required
                  />
                </div>
              </form>

            </div>

            <div className="w-full flex justify-center mt-5">
              <p>Use the Advanced Search to explore Pokémon by type, weakness, Ability and more!</p>
            </div>
          </div>

        </div>

        {/* Advanced search */}
        {!showAdvancedSearch && ( // Conditional rendering based on state
          <div className="flex flex-col items-center justify-center">
            <div className="w-[60vw] min-h-32 border-[2px] border-zinc-100 shadow-md shadow-teal-300 bg-[#00091D] rounded-bl-full rounded-br-full flex flex-col items-center justify-center">
              <h1 className="text-5xl">Show Advanced Search</h1>
              <div onClick={toggleAdvancedSearch} className="mt-5 text-4xl cursor-pointer">
                <MdArrowDropDownCircle />
              </div>
            </div>
          </div>
        )}

        {/* Advanced search- Expanded */}
        {showAdvancedSearch && (
          <div className="flex flex-col items-center justify-center">

            <div className="w-[60vw] min-h-32 border-[2px] border-zinc-100 shadow-md shadow-teal-300 bg-[#00091D] rounded-bl-3xl rounded-br-3xl flex flex-col items-center justify-center">

              {/* Types */}
              <div className="w-full flex justify-between px-8 py-5">
                {/* Types */}
                <div className="w-full flex flex-col gap-4">
                  <div><h1 className="text-3xl border-b border-b-zinc-100 pb-3">Type</h1></div>

                  <div className="w-full flex flex-wrap items-center gap-4">
                    {typesData.map((type, index) => {
                      return (
                        <h1
                          onClick={() => handleTypeClick(type)}
                          key={index}
                          style={{ backgroundColor: bgColor }}
                          className={`text-white border border-[${type.color}] px-8 py-1 rounded-full cursor-pointer ${selectedType === type.type ? selectedTypeColor : ''}`}>
                          {type.type}
                        </h1>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Area */}
              <div className="w-full flex flex-col px-8 py-5">
                <div><h1 className="text-3xl border-b border-b-zinc-100 pb-3">Area</h1></div>

                <div className="w-full flex flex-wrap items-center gap-4 py-4">
                  {areaData.map((area, index) => {
                    return (
                      <h1
                        key={index}
                        className={`text-white border border-white px-8 py-1 rounded-full cursor-pointer`}>
                        {area.name}
                      </h1>
                    )
                  })}
                </div>
              </div>

              {/* Reset button */}
              <div className="w-full flex justify-center gap-20 items-center py-10 text-2xl">
                <h1
                  onClick={() => { handleReset() }}
                  className="bg-red-600 hover:bg-transparent transition-all border hover:border border-red-600 px-20 py-3 rounded-full cursor-pointer">
                  Reset
                </h1>
              </div>

              {/* Hide button */}
              <div className="w-full flex flex-col items-center py-5">
                <h1 className="text-5xl">Hide Advanced Search</h1>
                <div onClick={toggleAdvancedSearch} className="mt-5 text-4xl cursor-pointer"><IoMdArrowDropupCircle /></div>
              </div>

            </div>

            {/* <div className="w-[60vw] min-h-20 bg-red-600"></div> */}
          </div>
        )
        }

        {/* All pokemons */}
        {
          isSearchMode ? (

            // Render each Pokemon from filtered list
            <div className="pokemon-list w-full min-h-20 mt-20 flex flex-wrap justify-start px-10 gap-6 pb-20">
              {
                filteredPokemonList.length === 0 ?
                  <div className="w-full flex items-center justify-center">
                    <h1 className="text-3xl font-semibold">No Pokémons Found</h1>
                  </div> :
                  filteredPokemonList.map((poke, index) => (

                    <NavLink to={`/pokeinfo/${poke.number}`} key={index} className={`shadow-sm shadow-zinc-100 cursor-pointer w-[22vw] h-[35vw] bg-[#0A141E] border border-zinc-100 rounded-xl overflow-hidden`} >

                      {/* Image div */}
                      <div className="relative w-full flex justify-center items-center" >
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

                  ))
              }
            </div>

          ) : (
            // Render each Pokemon from full list
            <div className="w-full min-h-20 mt-20 flex flex-wrap justify-start px-10 gap-6 pb-20">

              {pokemon
                .filter((poke) => selectedType ? poke.type1 === selectedType || poke.type2 === selectedType : true)
                .map((poke, index) => {
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
          )
        }

      </div >
    </div >

  )
}

export default Pokedex