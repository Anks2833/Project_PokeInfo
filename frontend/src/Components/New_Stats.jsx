import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import To_AdminDash from "./To_AdminDash";

const New_Stats = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        let formData = new FormData()
        formData.append('number', data.number);
        formData.append('hp', data.hp);
        formData.append('attack', data.attack);
        formData.append('defense', data.defense);
        formData.append('specialattack', data.specialattack);
        formData.append('specialdefense', data.specialdefense);
        formData.append('speed', data.speed);


        await axios.post('/api/stats', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

        reset()
    };

    return (

        // Stats data
        <div className="w-full min-h-screen bg-zinc-950 pt-20 flex flex-col items-center gap-6">

            <div>
                <h1 className="text-white text-4xl">Pokémon Stats Data</h1>
            </div>


            <div className="w-[60vw] min-h-32 border border-zinc-100 bg-zinc-900 rounded-xl mb-10 p-10">

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>

                    {/* Number */}
                    <div className="w-full px-6">
                        <input className="w-full rounded-lg bg-zinc-800 text-white" {...register("number", { required: true })} placeholder="Number (Enter in a format like 001, 200, 079)" type="number" />
                    </div>

                    {/* HP And Attack*/}
                    <div className="flex gap-4">
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("hp", { required: true })} placeholder="HP" type="number" />
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("attack", { required: true })} placeholder="Attack" type="number" />
                    </div>

                    {/* Defense and SpecialAttack */}
                    <div className="flex gap-4">
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("defense", { required: true })} placeholder="Defense" type="number" />
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("specialattack", { required: true })} placeholder="Special-Attack" type="number" />
                    </div>


                    {/* Special-Defense And Speed*/}
                    <div className="flex gap-4">
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("specialdefense", { required: true })} placeholder="Special-Defense" type="number" />
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("speed", { required: true })} placeholder="Speed" type="number" />
                    </div>

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>
            </div>

            <To_AdminDash />

        </div>
    )
}
export default New_Stats