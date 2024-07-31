import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { IoIosArrowDropdownCircle } from "react-icons/io";

const New_Stats = () => {

    const [isOpen, setIsOpen] = useState(false);

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

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (

        // Stats data
        <div className="w-full mt-20 pb-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl text-white flex justify-center">Create a new Stats Data</h1>
                <div onClick={toggleDropDown} className={`w-fit text-white text-3xl cursor-pointer ${isOpen ? "rotate-180" : "rotatet-0"}`}>
                    <IoIosArrowDropdownCircle />
                </div>
            </div>

            <div className={`${isOpen ? "w-[60vw] min-h-32 border border-zinc-100 rounded-xl mb-10 p-10 " : "hidden opacity-0"}`}>

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
        </div>
    )
}
export default New_Stats