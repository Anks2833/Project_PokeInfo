import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import axios from "axios";
import Headings from "./Headings";
import { NavLink } from "react-router-dom";
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoArrowDownCircle } from "react-icons/io5";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three';
import Heading_Mobile from "./Heading_Mobile"
import Model from "../../public/Charizard";

const Pokedex = () => {

  const variants = {
    hidden: { opacity: 0 }, // Start position off-screen and transparent
    visible: { opacity: 1, transition: { duration: 0.5 } }, // End position at original location and fully visible
  };

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const scaleVariants = {
    initial: { scale: 1 },
    tapped: { scale: 0.95 }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (isScrolled) {
      // Scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to a particular point (e.g., 1000px down the page)
      window.scrollTo({ top: 850, behavior: 'smooth' });
    }
    // Toggle scroll state
    setIsScrolled(!isScrolled);
  };

  const handleManualScroll = () => {
    if (window.scrollY >= 850 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY < 850 && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleManualScroll);
    return () => {
      window.removeEventListener('scroll', handleManualScroll);
    };
  }, [isScrolled]);

  const maxRotation = Math.PI / 4; // Maximum rotation angle (45 degrees)

  const [{ rotation }, setRotation] = useSpring(() => ({
    rotation: 0,
    config: { mass: 1, tension: 170, friction: 26 }, // Adjust spring config for smoothness
  }));

  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false); //State for toggle
  const [imageUrls, setImageUrls] = useState([]);
  const [bgColor] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedTypeColor, setSelectedTypeColor] = useState('');
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedAreaColor, setSelectedAreaColor] = useState('');
  const [selectedAreaTextColor, setSelectedAreaTextColor] = useState('');
  const [imgUrl] = useState("https://res.cloudinary.com/dlchhddqg/image/upload/v1724486335/uploads/Images/butwyfgyhpo6rcmicyx3.png")


  // To fetch pokemon data of all pokemons
  useEffect(() => {

    const fetchData = () => {
      axios.get('/api/pokedex')
        .then((response) => {
          setPokemon(response.data)
          console.log(response.data);
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
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);

  // Rotate the 3d model
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newRotation = scrollY * 0.01;

      // Clamp the rotation between 0 and maxRotation
      if (newRotation > maxRotation) newRotation = maxRotation;
      if (newRotation < 0) newRotation = 0;

      setRotation({ rotation: newRotation });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setRotation]);

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

  useEffect(() => {
    if (!Array.isArray(pokemon)) {
      setPokemon([]);
    }
  }, [pokemon]);

  //To filter out pokemons based on name and number
  const filteredPokemonList = pokemon.filter((poke) =>
    poke?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poke?.number?.toString().includes(searchTerm)
  );

  // Function to handle type selection
  const handleTypeClick = (type) => {
    setSelectedType(type.type);
    const bgColorClass = pokemonTypeColors(type.type); // Get the background color class for the selected type
    setSelectedTypeColor(bgColorClass); // Update the state with the background color class
  };

  const handleAreaClick = (region) => {

    setSelectedArea(region)
    setSelectedAreaColor("white");
    setSelectedAreaTextColor("black")
  }

  // Function to handle reset
  const handleReset = () => {
    setSelectedType('');
    setSelectedTypeColor('');
    setSelectedArea('')
    setSelectedAreaColor('')
    setSelectedAreaTextColor('')
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

  const regionData = [
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

    <div className="relative min-h-screen w-full bg-black">
      <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="w-full min-h-screen text-white">


          {/* The heading */}
          <Headings value={"Pokédex"} />

          {/* Header for mobile devices */}
          <Heading_Mobile name={"Pokédex"} to={"/"} />

          {/* The arrow */}
          <div className="hidden sm:block fixed bottom-6 right-3 text-3xl cursor-pointer" onClick={handleScroll}>
            <motion.div
              animate={{ rotate: isScrolled ? 180 : 0 }} // Rotate the arrow
              transition={{ duration: 0.5 }}
            >
              <IoArrowDownCircle />
            </motion.div>
          </div>

          {/* pokemons */}
          {imageUrls.length > 0 && (
            <div className="w-full hidden sm:flex justify-center items-center gap-[1vw] px-20 sm:mt-20">

              {/* First part */}
              <div className="flex items-center gap-2">

                {/* First pokemon */}
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                >
                  <NavLink to={`/pokeinfo/${imageUrls[0].number}`} className="">
                    <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                    <img className="w-full h-full absolute top-0 left-0" src={imageUrls[0].image} alt="notfound" />
                  </NavLink>
                </motion.div>

                {/* Second and third pokemon */}
                <div className="flex flex-col gap-5">
                  {/* Second pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[1].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[1].image} alt="notfound" />
                    </NavLink>
                  </motion.div>

                  {/* Third pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[2].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[2].image} alt="notfound" />
                    </NavLink>
                  </motion.div>
                </div>

                {/* Fourth Pokemon */}
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                >
                  <NavLink to={`/pokeinfo/${imageUrls[3].number}`} className="">
                    <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                    <img className="w-full h-full absolute top-0 left-0" src={imageUrls[3].image} alt="notfound" />
                  </NavLink>
                </motion.div>

                {/* Fifth and sixth pokemon */}
                <div className="flex flex-col gap-5">
                  {/* Fifth pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[4].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[4].image} alt="notfound" />
                    </NavLink>
                  </motion.div>

                  {/* Sixth pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[5].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[5].image} alt="notfound" />
                    </NavLink>
                  </motion.div>
                </div>
              </div>

              {/* Seventh pokemon aka second part */}
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                className="w-[16vw] h-[16vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
              >
                <NavLink to={`/pokeinfo/${imageUrls[6].number}`} className="">
                  <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                  <img className="w-full h-full absolute top-0 left-0" src={imageUrls[6].image} alt="notfound" />
                </NavLink>
              </motion.div>

              {/* Third Part */}
              <div className="flex items-center gap-2">

                {/* Eigth and ninth pokemon */}
                <div className="flex flex-col gap-5">
                  {/* Eighth pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[7].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[7].image} alt="notfound" />
                    </NavLink>
                  </motion.div>

                  {/* Ninth pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[8].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[8].image} alt="notfound" />
                    </NavLink>
                  </motion.div>
                </div>

                {/* Tenth pokemon */}
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                >
                  <NavLink to={`/pokeinfo/${imageUrls[9].number}`} className="">
                    <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                    <img className="w-full h-full absolute top-0 left-0" src={imageUrls[9].image} alt="notfound" />
                  </NavLink>
                </motion.div>

                {/* Eleventh and Twelfth Pokemon */}
                <div className="flex flex-col gap-5">
                  {/* Eleventh pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[10].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[10].image} alt="notfound" />
                    </NavLink>
                  </motion.div>

                  {/* Twelfth pokemon */}
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                  >
                    <NavLink to={`/pokeinfo/${imageUrls[11].number}`} className="">
                      <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                      <img className="w-full h-full absolute top-0 left-0" src={imageUrls[11].image} alt="notfound" />
                    </NavLink>
                  </motion.div>
                </div>

                {/* Thirteenth pokemon */}
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="w-[8vw] h-[8vw] relative border-2 border-teal-200 bg-black shadow-md shadow-emerald-300 rounded-full"
                >
                  <NavLink to={`/pokeinfo/${imageUrls[12].number}`} className="">
                    <img className="w-full h-full object-cover brightness-50" src={imgUrl} alt="notfound" />
                    <img className="w-full h-full absolute top-0 left-0" src={imageUrls[12].image} alt="notfound" />
                  </NavLink>
                </motion.div>
              </div>

            </div>
          )}

          {/* 3d model */}
          {/* <div className='w-fit h-[80vh] absolute translate-x-[0%] translate-y-[0%] z-[0] hidden sm:block'>
            <Canvas>
              <ambientLight intensity={4} />
              <animated.group rotation-y={rotation}>
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
              </animated.group>
            </Canvas>
          </div> */}

          {/* Input search */}
          <div className="w-full hidden sm:flex flex-col items-center mt-20">

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

          {/* Input search for mobile devices */}
          <div className="sm:hidden w-full flex flex-col items-center pt-20">

            <div className="w-full px-4">

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


          </div>

          {/* Advanced search */}
          {!showAdvancedSearch && ( // Conditional rendering based on state
            <div className="hidden sm:flex flex-col items-center justify-center">
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

                {/* Region */}
                <div className="w-full flex flex-col px-8 py-5">
                  <div><h1 className="text-3xl border-b border-b-zinc-100 pb-3">Region</h1></div>

                  <div className="w-full flex flex-wrap items-center gap-4 py-4">
                    {regionData.map((area, index) => {
                      return (
                        <h1
                          onClick={() => handleAreaClick(area.name)}
                          key={index}
                          className={`border border-white ${selectedArea === area.name ? `bg-${selectedAreaColor} text-${selectedAreaTextColor}` : ""} px-8 py-1 rounded-full cursor-pointer`}>
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

            </div>
          )
          }

          {/* All pokemons */}
          {
            isSearchMode ? (

              // Render each Pokemon from filtered list
              <>

                <div className="pokemon-list w-full min-h-20 mt-20 hidden sm:flex flex-wrap justify-start px-10 gap-6 pb-20">
                  {
                    filteredPokemonList.length === 0 ?
                      <div className="w-full flex items-center justify-center">
                        <h1 className="text-3xl font-semibold">No Pokémons Found</h1>
                      </div> :
                      filteredPokemonList.map((poke, index) => (

                        <motion.div
                          variants={opacityVariants}
                          initial="hidden"
                          whileInView="visible"
                          key={index}
                          className={`shadow-sm shadow-zinc-100 cursor-pointer w-[22vw] h-[35vw] bg-[#0A141E] border border-zinc-100 rounded-xl overflow-hidden`}
                        >
                          <NavLink to={`/pokeinfo/${poke.number}`}>

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
                        </motion.div>

                      ))
                  }
                </div>

                {/* For mobile devices */}
                <div className="w-full min-h-20 mt-5 sm:hidden flex flex-col">
                  {
                    filteredPokemonList.length === 0 ?
                      <div className="w-full flex items-center justify-center">
                        <h1 className="text-3xl font-semibold">No Pokémons Found</h1>
                      </div> :
                      filteredPokemonList.map((poke, index) => (

                        <NavLink to={`/pokeinfo/${poke.number}`} key={index} className={`w-full h-20 flex justify-between cursor-pointer bg-[#0A141E] border-t border-t-zinc-800 overflow-hidden`} >

                          {/* Image div and info div */}
                          <div className="w-1/2 flex justify-start pl-4 gap-2">

                            {/* The image div */}
                            <div className="flex items-center">
                              <img className={`${pokemonTypeShadow(poke.type1)} ${pokemonTypeBorder(poke.type1)} w-12 border rounded shadow`} src={poke.image} alt="nonimg" />
                            </div>

                            {/* The name and number */}
                            <div className="flex flex-col justify-center text-lg">
                              {/* The name */}
                              <h1 className="font-semibold">{poke.name}</h1>

                              {/* The number */}
                              <h1 className="font-light">#{poke.number}</h1>
                            </div>
                          </div>

                          {/* Type div */}
                          <div className={`w-1/2 flex justify-end items-end pr-2 pb-2 ${poke.type2 && "gap-1"}`}>

                            {/* Type-1 */}
                            <div className="flex justify-center items-center">
                              <h1
                                className={
                                  `${pokemonTypeColors(poke.type1)} text-xs px-5 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner`
                                }>
                                {poke.type1}
                              </h1>
                            </div>

                            {/* Type-2 */}
                            <div className="flex justify-center items-center">
                              <h1 className={`${pokemonTypeColors(poke.type2)} ${poke.type2 && "text-xs px-5 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner"}`}>{poke.type2}</h1>
                            </div>
                          </div>

                        </NavLink>
                      ))
                  }
                </div>

              </>

            ) : (
              // Render each Pokemon from full list
              <>

                <div className="w-full min-h-20 mt-20 hidden sm:flex flex-wrap justify-start px-10 gap-6 pb-20">

                  {pokemon
                    .filter((poke) => selectedArea ? poke.region[0] === selectedArea : true)
                    .filter((poke) => selectedType ? poke.type1 === selectedType || poke.type2 === selectedType : true)
                    .map((poke, index) => {
                      return (

                        <motion.div
                          key={index}
                          className={`cursor-pointer w-[22vw] h-[35vw] bg-[#0A141E] border-2 border-zinc-100 rounded-xl overflow-hidden`}
                          role="button"
                          variants={scaleVariants}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          whileTap="tapped"
                        >
                          <NavLink to={`/pokeinfo/${poke.number}`}>

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
                        </motion.div>
                      )
                    })}

                </div>

                {/* For mobile devices */}
                <div className="w-full min-h-20 mt-5 sm:hidden flex flex-col">

                  {pokemon
                    .filter((poke) => selectedType ? poke.type1 === selectedType || poke.type2 === selectedType : true)
                    .map((poke, index) => {
                      return (

                        <NavLink to={`/pokeinfo/${poke.number}`} key={index} className={`w-full h-20 flex justify-between cursor-pointer bg-[#0A141E] border-t border-t-zinc-800 overflow-hidden`} >

                          {/* Image div and info div */}
                          <div className="w-1/2 flex justify-start pl-4 gap-2">

                            {/* The image div */}
                            <div className="flex items-center">
                              <img className={`${pokemonTypeShadow(poke.type1)} ${pokemonTypeBorder(poke.type1)} w-12 border rounded shadow`} src={poke.image} alt="nonimg" />
                            </div>

                            {/* The name and number */}
                            <div className="flex flex-col justify-center text-lg">
                              {/* The name */}
                              <h1 className="font-semibold">{poke.name}</h1>

                              {/* The number */}
                              <h1 className="font-light">#{poke.number}</h1>
                            </div>
                          </div>

                          {/* Type div */}
                          <div className={`w-1/2 flex justify-end items-end pr-2 pb-2 ${poke.type2 && "gap-1"}`}>

                            {/* Type-1 */}
                            <div className="flex justify-center items-center">
                              <h1
                                className={
                                  `${pokemonTypeColors(poke.type1)} text-xs px-5 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner`
                                }>
                                {poke.type1}
                              </h1>
                            </div>

                            {/* Type-2 */}
                            <div className="flex justify-center items-center">
                              <h1 className={`${pokemonTypeColors(poke.type2)} ${poke.type2 && "text-xs px-5 py-2 rounded-md border border-zinc-900 shadow-black shadow-inner"}`}>{poke.type2}</h1>
                            </div>
                          </div>

                        </NavLink>
                      )
                    })}

                </div>

              </>
            )
          }


        </div >
      </div>
    </div>

  )
}

export default Pokedex