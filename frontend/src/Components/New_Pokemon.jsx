//A component to create new pokemon on admin dashboard

import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { IoIosArrowDropdownCircle } from "react-icons/io";
// import { MdCancel } from "react-icons/md";

const New_Pokemon = () => {

    // const [abilities, setAbilities] = useState([])
    const [selectedWeaknesses, setSelectedWeaknesses] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const pokemonTypes = [
        { type: "Grass", bgColor: "#7AC74C" },
        { type: "Fire", bgColor: "#FFC107" },
        { type: "Water", bgColor: "#2196F3" },
        { type: "Electric", bgColor: "#FF9800" },
        { type: "Ice", bgColor: "#4CAF50" },
        { type: "Fighting", bgColor: "#8E24AA" },
        { type: "Poison", bgColor: "#8E24AA" },
        { type: "Ground", bgColor: "#9C27B0" },
        { type: "Flying", bgColor: "#03A9F4" },
        { type: "Psychic", bgColor: "#FF69B4" },
        { type: "Bug", bgColor: "#8BC34A" },
        { type: "Rock", bgColor: "#9C27B0" },
        { type: "Ghost", bgColor: "#9C27B0" },
        { type: "Steel", bgColor: "#9C27B0" },
        { type: "Dragon", bgColor: "#9C27B0" },
        { type: "Dark", bgColor: "#9C27B0" },
        { type: "Fairy", bgColor: "#9C27B0" },
        { type: "Normal", bgColor: "#A8A77A" }

    ]

    const onSubmit = async (data) => {

        let formData = new FormData()
        formData.append('number', data.number);
        formData.append('name', data.name);
        formData.append('type1', data.type1);
        formData.append('type2', data.type2);
        formData.append('ability', data.ability);
        formData.append('category', data.category);
        formData.append('height', data.height);
        formData.append('weight', data.weight);
        // Handling weaknesses as an array
        selectedWeaknesses.forEach((weakness, index) => {
            formData.append(`weakness[${index}]`, weakness);
        });
        formData.append('image', data.image[0]);
        formData.append('gender1', data.gender1[0]);
        formData.append('gender2', data.gender2[0]);
        formData.append('description', data.description)

        formData.append('evolution1', data.evo1)
        formData.append('evolution2', data.evo2)
        formData.append('evolution3', data.evo3)


        await axios.post('/api/pokedex', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

        reset()
    };

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    const toggleWeaknessSelection = (weaknessType) => {
        setSelectedWeaknesses(prevState => {
            if (prevState.includes(weaknessType)) {
                return prevState.filter(type => type !== weaknessType);
            } else {
                return [...prevState, weaknessType];
            }
        });
    };

    return (
        //New pokemon
        <div className="w-full mt-20 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl text-white flex justify-center">Create a new Pokémon</h1>
                <div onClick={toggleDropDown} className={`w-fit text-white text-3xl cursor-pointer ${isOpen ? "rotate-180" : "rotatet-0"}`}>
                    <IoIosArrowDropdownCircle />
                </div>
            </div>

            <div className={`${isOpen ? "w-[60vw] min-h-32 border border-zinc-100 rounded-xl mb-10 p-10 " : "hidden opacity-0"}`}>

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
                    {/* Number */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number", { required: true })} placeholder="Number" type="number" />

                    {/* Name */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name", { required: true })} placeholder="Name" type="text" />

                    {/* Pokemon-Type1 */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type1", { required: true })} placeholder="Type-1" type="text" />

                    {/* Pokemon-Type2 */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type2")} placeholder="Type-2" type="text" />

                    {/* Pokemon Image */}
                    <div>
                        <label className="text-white" htmlFor="Image">Pokemon-Image(Upload an appropriate png image): </label>
                        <input id="Image" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("image")} type="file" />
                    </div>

                    {/* Gender-1 */}
                    <div>
                        <label className="text-white" htmlFor="Gender1">Gender-1(Upload an appropriate svg): </label>
                        <input id="Gender1" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("gender1")} placeholder="Gender-1" type="file" />
                    </div>

                    {/* Gender-2 */}
                    <div>
                        <label className="text-white" htmlFor="Gender2">Gender-2(Upload an appropriate svg): </label>
                        <input id="Gender2" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("gender2")} placeholder="Gender-1" type="file" />
                    </div>

                    {/* Ability */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("ability", { required: true })} placeholder="Ability" type="text" />


                    {/* Category */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("category", { required: true })} placeholder="Category" type="text" />

                    {/* Height */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("height", { required: true })} placeholder="Height" type="text" />

                    {/* Weight */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("weight", { required: true })} placeholder="Weight" type="text" />

                    {/* Weaknesses */}
                    <div className="w-[50vw] min-h-[8vw] border border-zinc-500 p-4 bg-zinc-800 rounded-lg">
                        <h1 className="text-white text-2xl">Weaknesses:</h1>

                        <div className="w-full flex flex-col gap-4">
                            <div className="w-fit flex flex-wrap gap-3 items-center mt-5">
                                {pokemonTypes.map((poke, index) => {
                                    return (
                                        <h1 onClick={() => toggleWeaknessSelection(poke.type)} key={index} className="w-fit cursor-pointer bg-white text-black px-4 py-2 rounded-tl-xl rounded-xl">{poke.type}</h1>
                                    )
                                })}
                            </div>

                            <div className="w-full h-32 border border-zinc-700 rounded-xl p-4 flex flex-wrap gap-2">
                                {selectedWeaknesses.map((weakness, index) => (
                                    <h1 key={index} className="w-fit h-fit bg-white text-black px-4 py-2 rounded-xl">{weakness}</h1>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <textarea rows="10" cols="100" className="resize-none rounded-lg bg-zinc-800 text-white" {...register("description", { required: true })} placeholder="Description"></textarea>

                    {/* Evolution-1 */}
                    {/* <div className="w-[50vw] flex gap-6">
                        <input className="w-[30vw] rounded-lg text-white bg-zinc-800" {...register("evo1")} placeholder="Evolution-1" type="text" />
                        <input id="Gender1" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("evoimg1")} type="file" />
                    </div> */}
                    
                    {/* Evolution-2 */}
                    {/* <div className="w-[50vw] flex gap-6">
                        <input className="w-[30vw] rounded-lg text-white bg-zinc-800" {...register("evo2")} placeholder="Evolution-2" type="text" />
                        <input id="Gender1" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("evoimg2")} type="file" />
                    </div> */}

                    {/* Evolution-3 */}
                    {/* <div className="w-[50vw] flex gap-6">
                        <input className="w-[30vw] rounded-lg text-white bg-zinc-800" {...register("evo3")} placeholder="Evolution-3" type="text" />
                        <input id="Gender1" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("evoimg3")} type="file" />
                    </div> */}

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>
            </div>
        </div>
    )
}
export default New_Pokemon