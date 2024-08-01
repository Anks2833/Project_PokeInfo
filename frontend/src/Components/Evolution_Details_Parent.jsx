// This is the parent component that describes the evolution details
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';
import axios from "axios"

import { RiArrowRightDoubleFill } from "react-icons/ri";


const Evolution_Details_Parent = (props) => {

    const { number } = props


    const [evoData, setEvoData] = useState([])

    useEffect(() => {

        const fetchData = () => {
            axios.get(`/api/evolution`)
                .then((response) => {
                    const foundEvolution = response.data.find(evo =>
                        evo.number1 === number ||
                        evo.number2 === number ||
                        evo.number3 === number
                    );
                    if (foundEvolution) {
                        setEvoData([foundEvolution])
                    } else {
                        throw new Error('No evolution found for this Pokémon.');
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }

        fetchData()

    }, [number])

    console.log(evoData);

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
        <>
            <div className="w-full rounded-3xl bg-[#00091D] flex flex-col items-center py-10 mb-10 border border-zinc-700 shadow shadow-violet-600">

                {/* The heading */}
                <div className="w-full flex justify-center"><h1 className="text-5xl text-sky-500 font-semibold">Evolution</h1></div>

                {/* Evolution-1 */}

                {evoData.length > 0 ?

                    <div className="relative flex gap-52">

                        {/* Evo1 */}
                        <NavLink to={`/pokeinfo/${evoData[0].number1}`} className="py-12 flex flex-col items-center gap-2">

                            {/* Image */}
                            <div className={`${pokemonTypeBorder(evoData[0].type11)} bg-zinc-900 border-[6px] rounded-full`}>
                                <img src={evoData[0].image1} alt="noimg" />
                            </div>

                            {/* Number and Name */}
                            <div className="flex flex-col items-center">
                                <h1 className="text-3xl">#{evoData[0].number1}</h1>
                                <h1 className="text-3xl">{evoData[0].name1}</h1>
                            </div>

                            {/* Types */}
                            <div className="flex gap-2">
                                {/* Type-1 */}
                                <div>
                                    <h1 className={`${pokemonTypeColors(evoData[0].type11)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{evoData[0].type11 || "NA"}</h1>
                                </div>

                                {/* Type-2 */}
                                <div>
                                    <h1 className={`${pokemonTypeColors(evoData[0].type21)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{evoData[0].type21 || "NA"}</h1>
                                </div>
                            </div>

                        </NavLink>

                        {evoData[0].number2 && <div className="absolute left-[25vw] top-[10vw] text-6xl text-amber-500"><RiArrowRightDoubleFill /></div>}

                        {/* Evo2 */}
                        <NavLink to={`/pokeinfo/${evoData[0].number2}`} className="py-12 flex flex-col items-center gap-2">

                            {/* Image */}
                            <div className={`${pokemonTypeBorder(evoData[0].type11)} bg-zinc-900 border-[6px] rounded-full`}>
                                <img src={evoData[0].image2} alt="noimg" />
                            </div>

                            {/* Number and Name */}
                            <div className="flex flex-col items-center">
                                <h1 className="text-3xl">#{evoData[0].number2}</h1>
                                <h1 className="text-3xl">{evoData[0].name2}</h1>
                            </div>

                            {/* Types */}
                            <div className="flex gap-2">
                                {/* Type-1 */}
                                <div>
                                    <h1 className={`${pokemonTypeColors(evoData[0].type12)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{evoData[0].type12 || "NA"}</h1>
                                </div>

                                {/* Type-2 */}
                                <div>
                                    <h1 className={`${pokemonTypeColors(evoData[0].type22)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{evoData[0].type22 || "NA"}</h1>
                                </div>
                            </div>

                        </NavLink>

                        {evoData[0].number3 && <div className="absolute right-[25vw] top-[10vw] text-6xl text-amber-500"><RiArrowRightDoubleFill /></div>}

                        {/* Evo3 */}
                        <NavLink to={`/pokeinfo/${evoData[0].number3}`} className="py-12 flex flex-col items-center gap-2">

                            {/* Image */}
                            <div className={`${pokemonTypeBorder(evoData[0].type11)} bg-zinc-900 border-[6px] rounded-full`}>
                                <img src={evoData[0].image3} alt="noimg" />
                            </div>

                            {/* Number and Name */}
                            <div className="flex flex-col items-center">
                                <h1 className="text-3xl">#{evoData[0].number3}</h1>
                                <h1 className="text-3xl">{evoData[0].name3}</h1>
                            </div>

                            {/* Types */}
                            <div className="flex gap-2">
                                {/* Type-1 */}
                                <div>
                                    <h1 className={`${pokemonTypeColors(evoData[0].type13)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{evoData[0].type13 || "NA"}</h1>
                                </div>

                                {/* Type-2 */}
                                <div>
                                    <h1 className={`${pokemonTypeColors(evoData[0].type23)} text-2xl px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner`}>{evoData[0].type23 || "NA"}</h1>
                                </div>
                            </div>

                        </NavLink>
                    </div>
                    :

                    <h1>This Pokémon Does Not Evolve</h1>
                }

            </div>
        </>
    )
}
export default Evolution_Details_Parent