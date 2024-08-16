import { useForm } from 'react-hook-form';
import axios from "axios"
import To_AdminDash from "./To_AdminDash";
import Type_Dropdown from './Type_Dropdown';
import { useState, useEffect } from 'react';


const Evolution_Data = () => {

    const { register, handleSubmit, watch, reset } = useForm();

    // Type of first pokemon
    const [type11, setType11] = useState("");
    const [type21, setType21] = useState("");

    // Type of second pokemon
    const [type12, setType12] = useState("");
    const [type22, setType22] = useState("");

    // Type of third pokemon
    const [type13, setType13] = useState("");
    const [type23, setType23] = useState("");

    const [imagePreview, setImagePreview] = useState('');
    const [imagePreview1, setImagePreview1] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');

    const onSubmit = async (data) => {

        let formData = new FormData()
        formData.append('name1', data.name1);
        formData.append('number1', data.number1);
        formData.append('evolution1', data.evolution1[0]);
        formData.append('type11', type11);
        formData.append('type21', type21);
        formData.append('name2', data.name2);
        formData.append('number2', data.number2);
        formData.append('evolution2', data.evolution2[0]);
        formData.append('type12', type12);
        formData.append('type22', type22);
        formData.append('name3', data.name3);
        formData.append('number3', data.number3);
        formData.append('evolution3', data.evolution3[0]);
        formData.append('type13', type13);
        formData.append('type23', type23);

        console.log("Form data being sent:", formData);

        await axios.post('/api/evolution', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

        reset()
    };

    // Watch the file input for changes
    const image = watch('evolution1');
    const image1 = watch('evolution2');
    const image2 = watch('evolution3');

    // Update preview when file changes using useEffect
    useEffect(() => {
        if (image && image[0]) {
            const file = image[0];
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);

            // Clean up the preview URL when the component unmounts
            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }
    }, [image]);

    useEffect(() => {
        if (image1 && image1[0]) {
            const file = image1[0];
            const previewUrl = URL.createObjectURL(file);
            setImagePreview1(previewUrl);

            // Clean up the preview URL when the component unmounts
            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }
    }, [image1]);

    useEffect(() => {
        if (image2 && image2[0]) {
            const file = image2[0];
            const previewUrl = URL.createObjectURL(file);
            setImagePreview2(previewUrl);

            // Clean up the preview URL when the component unmounts
            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }
    }, [image2]);

    return (

        // Evolution data
        <div className="w-full min-h-screen bg-zinc-950 pt-20 flex flex-col items-center gap-6">

            <div>
                <h1 className="text-white text-4xl">Pokémon Evolution Data</h1>
            </div>

            <div className="w-[60vw] min-h-32 border border-zinc-100 bg-zinc-900 rounded-xl mb-10 p-10">

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>

                    {/* First Pokemon */}
                    <div className='flex flex-col gap-5 border p-4 rounded-lg bg-black mt-5'>
                        {/* Name1 And Number1*/}
                        <div className="flex gap-4">
                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name1", { required: true })} placeholder="Name1" type="text" />
                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number1", { required: true })} placeholder="Number1" type="text" />
                        </div>

                        {/* Type1-1 and Type2-1 */}
                        <div className="w-full flex justify-center gap-4">
                            {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type11", { required: true })} placeholder="Type-1" type="text" /> */}
                            <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-11" selectedType={type11} setSelectedType={setType11} /></div>
                            {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type21")} placeholder="Type-2" type="text" /> */}
                            <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-21" selectedType={type21} setSelectedType={setType21} /></div>
                        </div>

                        {/* Evolution1 Image */}
                        <div className="flex flex-col items-center">
                            <div className='flex items-center gap-2'>
                                <label className="text-white" htmlFor="Image">Pokemon-Image1:</label>
                                <input
                                    id="Image"
                                    accept="image/png"
                                    className="w-[25vw] rounded-lg bg-zinc-800 text-white"
                                    {...register("evolution1")}
                                    type="file" />
                            </div>

                            <div className="w-full flex justify-center items-center min-h-60 rounded-lg mt-4">
                                {imagePreview ? (
                                    <img className="w-[20vw] h-[20vw] border border-zinc-100 rounded-lg" src={imagePreview} alt="Pokemon Preview" />
                                ) : (
                                    <div className="w-[20vw] h-[10vw] border border-zinc-100 rounded-lg flex justify-center items-center">
                                        <p className="text-white text-xl">No image selected</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Second Pokemon */}
                    <div className='flex flex-col gap-5 border p-4 rounded-lg bg-black mt-5'>
                        {/* Name2 And Number2*/}
                        <div className="flex gap-4">
                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name2", { required: true })} placeholder="Name2" type="text" />
                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number2", { required: true })} placeholder="Number2" type="text" />
                        </div>

                        {/* Type1-2 and Type2-2 */}
                        <div className="w-full flex justify-center gap-4">
                            {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type12", { required: true })} placeholder="Type-1" type="text" /> */}
                            <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-12" selectedType={type12} setSelectedType={setType12} /></div>
                            {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type22")} placeholder="Type-2" type="text" /> */}
                            <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-22" selectedType={type22} setSelectedType={setType22} /></div>
                        </div>

                        {/* Evolution2 Image */}
                        <div className="flex flex-col items-center">
                            <div className='flex items-center gap-2'>
                                <label className="text-white" htmlFor="Image">Pokemon-Image2:</label>
                                <input
                                    id="Image"
                                    accept="image/png"
                                    className="w-[25vw] rounded-lg bg-zinc-800 text-white"
                                    {...register("evolution2")}
                                    type="file"
                                />
                            </div>

                            <div className="w-full flex justify-center items-center min-h-60 rounded-lg mt-4">
                                {imagePreview1 ? (
                                    <img className="w-[20vw] h-[20vw] border border-zinc-100 rounded-lg" src={imagePreview1} alt="Pokemon Preview" />
                                ) : (
                                    <div className="w-[20vw] h-[10vw] border border-zinc-100 rounded-lg flex justify-center items-center">
                                        <p className="text-white text-xl">No image selected</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Third Pokemon */}
                    <div className='flex flex-col gap-5 border p-4 rounded-lg bg-black mt-5'>
                        {/* Name3 And Number3*/}
                        <div className="flex gap-4">
                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name3")} placeholder="Name3" type="text" />
                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number3")} placeholder="Number3" type="text" />
                        </div>

                        {/* Type1-3 and Type2-3 */}
                        <div className="w-full flex justify-center gap-4">
                            {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type13")} placeholder="Type-1" type="text" /> */}
                            <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-13" selectedType={type13} setSelectedType={setType13} /></div>
                            {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type23")} placeholder="Type-2" type="text" /> */}
                            <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-23" selectedType={type23} setSelectedType={setType23} /></div>
                        </div>

                        {/* Evolution3 Image */}
                        <div className="flex flex-col items-center">
                            <div className='flex items-center gap-2'>
                                <label className="text-white" htmlFor="Image">Pokemon-Image3:</label>
                                <input
                                    id="Image"
                                    accept="image/png"
                                    className="w-[25vw] rounded-lg bg-zinc-800 text-white"
                                    {...register("evolution3")}
                                    type="file"
                                />
                            </div>

                            <div className="w-full flex justify-center items-center min-h-60 rounded-lg mt-4">
                                {imagePreview2 ? (
                                    <img className="w-[20vw] h-[20vw] border border-zinc-100 rounded-lg" src={imagePreview2} alt="Pokemon Preview" />
                                ) : (
                                    <div className="w-[20vw] h-[10vw] border border-zinc-100 rounded-lg flex justify-center items-center">
                                        <p className="text-white text-xl">No image selected</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>
            </div>

            <To_AdminDash />

        </div>
    )
}
export default Evolution_Data