//A component to delete a pokemon through admin dashboard
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Delete_Pokemon = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [deletePokemon, setDeletePokemon] = useState('');

    const onSubmit = async (data) => {

        await axios.delete('/api/pokedex', { data })
            .then((response) => {
                console.log(response.data);
                setDeletePokemon(`Pokemon #${data.number} deleted`)
            })
            .catch((err) => {
                console.log(err.message);
            });

            reset()
    };

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };


    return (
        //Remove Pokemon
        <div className="w-full mt-20 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl text-white flex justify-center">Delete an existing Pokémon</h1>
                <div onClick={()=>{toggleDropDown()}} className={`w-fit text-white text-3xl cursor-pointer ${isOpen ? "rotate-180" : "rotatet-0"}`}>
                    <IoIosArrowDropdownCircle />
                </div>
            </div>

            <div className={`${isOpen ? "w-[60vw] min-h-32 border border-zinc-100 rounded-xl mb-10 p-10" : "hidden"}`}>

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number")} placeholder="Number" type="number" />
                    <input type="submit" value="Delete" className="px-10 py-2 rounded-lg bg-red-600 text-white" />
                </form>

                <div>
                    <h1 className="w-full text-white text-2xl text-center mt-6">
                        {deletePokemon}
                    </h1>
                </div>

            </div>
        </div>
    )
}
export default Delete_Pokemon