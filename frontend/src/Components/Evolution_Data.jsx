import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Evolution_Data = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        let formData = new FormData()
        formData.append('name1', data.name1);
        formData.append('number1', data.number1);
        formData.append('evolution1', data.evolution1[0]);
        formData.append('type11', data.type11);
        formData.append('type21', data.type21);
        formData.append('name2', data.name2);
        formData.append('number2', data.number2);
        formData.append('evolution2', data.evolution2[0]);
        formData.append('type12', data.type12);
        formData.append('type22', data.type22);
        formData.append('name3', data.name3);
        formData.append('number3', data.number3);
        formData.append('evolution3', data.evolution3[0]);
        formData.append('type13', data.type13);
        formData.append('type23', data.type23);


        await axios.post('/api/evolution', formData)
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

        // Evolution data
        <div className="w-full mt-20 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl text-white flex justify-center">Create a new Evolution Data</h1>
                <div onClick={toggleDropDown} className={`w-fit text-white text-3xl cursor-pointer ${isOpen ? "rotate-180" : "rotatet-0"}`}>
                    <IoIosArrowDropdownCircle />
                </div>
            </div>

            <div className={`${isOpen ? "w-[60vw] min-h-32 border border-zinc-100 rounded-xl mb-10 p-10 " : "hidden opacity-0"}`}>

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>

                    {/* Name1 And Number1*/}
                    <div className="flex gap-4">
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name1", { required: true })} placeholder="Name1" type="text" />
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number1", { required: true })} placeholder="Number1" type="text" />
                    </div>

                    {/* Type1-1 and Type2-1 */}
                    <div className="flex gap-4">
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type11", { required: true })} placeholder="Type-1" type="text" />
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type21")} placeholder="Type-2" type="text" />
                    </div>

                    {/* Evolution1 Image */}
                    <div className="flex gap-2 items-center">
                        <label className="text-white" htmlFor="Image">Pokemon-Image1:</label>
                        <input id="Image" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("evolution1")} type="file" />
                    </div>

                    {/* Name2 And Number2*/}
                    <div className="flex gap-4">
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name2", { required: true })} placeholder="Name2" type="text" />
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number2", { required: true })} placeholder="Number2" type="text" />
                    </div>

                    {/* Type1-2 and Type2-2 */}
                    <div className="flex gap-4">
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type12", { required: true })} placeholder="Type-1" type="text" />
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type22")} placeholder="Type-2" type="text" />
                    </div>

                    {/* Evolution2 Image */}
                    <div className="flex gap-2 items-center">
                        <label className="text-white" htmlFor="Image">Pokemon-Image2:</label>
                        <input id="Image" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("evolution2")} type="file" />
                    </div>

                    {/* Name3 And Number3*/}
                    <div className="flex gap-4">
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name3", { required: true })} placeholder="Name3" type="text" />
                        <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number3", { required: true })} placeholder="Number3" type="text" />
                    </div>

                    {/* Type1-3 and Type2-3 */}
                    <div className="flex gap-4">
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type13", { required: true })} placeholder="Type-1" type="text" />
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type23")} placeholder="Type-2" type="text" />
                    </div>

                    {/* Evolution3 Image */}
                    <div className="flex gap-2 items-center">
                        <label className="text-white" htmlFor="Image">Pokemon-Image3:</label>
                        <input id="Image" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("evolution3")} type="file" />
                    </div>

                    

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>
            </div>
        </div>
    )
}
export default Evolution_Data