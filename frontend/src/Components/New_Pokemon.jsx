//A component to create new pokemon on admin dashboard

import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const New_Pokemon = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        let formData = new FormData()
        formData.append('number', data.number);
        formData.append('name', data.name);
        formData.append('type1', data.type1);
        formData.append('type2', data.type2);
        formData.append('abilities', data.abilities);
        formData.append('category', data.category);
        formData.append('height', data.height);
        formData.append('weight', data.weight);
        formData.append('weakness', data.weakness);
        formData.append('image', data.image[0]);
        formData.append('gender1', data.gender1[0]);
        formData.append('gender2', data.gender2[0]);
        formData.append('description', data.description)

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
                    {/* Name */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number", { required: true })} placeholder="Number" type="number" />

                    {/* Number */}
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

                    {/* Abilities */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("abilities", { required: true })} placeholder="Abilities" type="text" />
                    {/* Add Ability Button */}
                    <button className="bg-blue-700 px-8 py-2 rounded-xl font-semibold text-white" type="button">Add</button>
                    {/* Remove Ability Button */}
                    <button className="bg-red-700 px-8 py-2 rounded-xl font-semibold text-white" type="button">Remove</button>
                    {/* DIV to add abilities and push them in the array */}
                    <div className="w-[50vw] h-[8vw] border border-zinc-500 p-4 bg-zinc-800">
                        <h1 className="text-white text-2xl">Abilities:</h1>

                        <div className="w-full">
                            <div className="w-fit flex items-center mt-2">
                                <h1 className="w-fit bg-white px-4 py-2 rounded-tl-xl rounded-bl-xl">Overgrow</h1>
                                <div className="text-white text-3xl cursor-pointer"><MdCancel /></div>
                            </div>
                        </div>
                    </div>

                    {/* Category */}
                    <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("category", { required: true })} placeholder="Category" type="text" />

                    {/* Height */}
                    <input className="w-[10vw] rounded-lg bg-zinc-800 text-white" {...register("height", { required: true })} placeholder="Height" type="number" />

                    {/* Weight */}
                    <input className="w-[10vw] rounded-lg bg-zinc-800 text-white" {...register("weight", { required: true })} placeholder="Weight" type="number" />

                    {/* Weaknesses */}
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("weakness", { required: true })} placeholder="Weaknesses" type="text" />

                    {/* Add Weakness Button */}
                    <button className="bg-blue-700 px-8 py-2 rounded-xl font-semibold text-white" type="button">Add</button>
                    {/* Remove Weakness Button */}
                    <button className="bg-red-700 px-8 py-2 rounded-xl font-semibold text-white" type="button">Remove</button>

                    {/* DIV to add abilities and push them in the array */}
                    <div className="w-[50vw] h-[8vw] border border-zinc-500 p-4 bg-zinc-800">
                        <h1 className="text-white text-2xl">Weaknesses:</h1>

                        <div className="w-full">
                            <div className="w-fit flex items-center mt-2">
                                <h1 className="w-fit bg-white px-4 py-2 rounded-tl-xl rounded-bl-xl">Fire</h1>
                                <div className="text-white text-3xl cursor-pointer"><MdCancel /></div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <textarea rows="10" cols="100" className="resize-none rounded-lg bg-zinc-800 text-white" {...register("description", { required: true })} placeholder="Description"></textarea>

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>
            </div>
        </div>
    )
}
export default New_Pokemon