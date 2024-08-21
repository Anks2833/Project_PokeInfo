//A component to create new pokemon on admin dashboard
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import { Checkbox, Typography } from "@material-tailwind/react";
import To_AdminDash from "./To_AdminDash";
import Type_Dropdown from "./Type_Dropdown";

const New_Pokemon = () => {

    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [selectedWeaknesses, setSelectedWeaknesses] = useState([]);
    const [imagePreview, setImagePreview] = useState("");

    const { register, handleSubmit, watch, reset } = useForm({
        defaultValues: {
            gender1: false,
            gender2: false,
        },
    });

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
        formData.append('type1', type1);
        formData.append('type2', type2);
        formData.append('ability', data.ability);
        formData.append('category', data.category);
        formData.append('height', data.height);
        formData.append('weight', data.weight);
        // Handling weaknesses as an array
        selectedWeaknesses.forEach((weakness, index) => {
            formData.append(`weakness[${index}]`, weakness);
        });
        formData.append('image', data.image[0]);
        formData.append('gender1', data.gender1 ? 'true' : 'false');
        formData.append('gender2', data.gender2 ? 'true' : 'false');
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
        setType1(""); // Reset type1 state
        setType2(""); // Reset type2 state
        setSelectedWeaknesses([]); // Reset weaknesses state
        setImagePreview(""); // Reset image preview state
    };

    // Watch the file input for changes
    const image = watch('image');

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


    const toggleWeaknessSelection = (weaknessType) => {
        setSelectedWeaknesses(prevState => {
            if (prevState.includes(weaknessType)) {
                return prevState.filter(type => type !== weaknessType);
            } else {
                return [...prevState, weaknessType];
            }
        });
    };

    const resetWeaknessSelection = () => {
        setSelectedWeaknesses([])
    }


    return (
        //New pokemon
        <div className="w-full min-h-screen bg-zinc-950 pt-20 flex flex-col items-center gap-6">

            <div>
                <h1 className="text-white text-4xl">Create A New Pokémon</h1>
            </div>

            <div className="w-[60vw] border border-zinc-100 bg-zinc-900 rounded-xl mb-10 p-10">

                <form className="flex flex-wrap justify-center items-center gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full flex flex-wrap justify-center gap-3 bg-black p-4 border border-zinc-100 rounded-lg mx-10">
                        {/* Number */}
                        <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("number", { required: true })} placeholder="Number" type="number" />

                        {/* Name */}
                        <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("name", { required: true })} placeholder="Name" type="text" />

                        {/* Pokemon-Type1 */}
                        {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type1", { required: true })} placeholder="Type-1" type="text" /> */}
                        <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-1" selectedType={type1} setSelectedType={setType1} /></div>

                        {/* Pokemon-Type2 */}
                        {/* <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type2")} placeholder="Type-2" type="text" /> */}
                        <div className="w-1/3 flex justify-center"><Type_Dropdown name="Type-2" selectedType={type2} setSelectedType={setType2} /></div>
                    </div>

                    {/* Pokemon Image */}
                    <div className="w-full flex flex-wrap justify-center gap-2 bg-black p-4 border border-zinc-100 rounded-lg mx-10">
                        <label className="text-white" htmlFor="Image">Pokemon-Image(Upload an appropriate png image)</label>
                        <input
                            id="Image"
                            accept="image/png"
                            {...register("image")}
                            // onChange={handleImageChange} // Updated to handle image preview
                            className="w-[25vw] rounded-lg bg-zinc-800 text-white"
                            type="file"
                        />
                        <div className="w-full flex justify-center items-center min-h-60 rounded-lg">
                            {imagePreview ? (
                                <img className="w-[20vw] h-[20vw] border border-zinc-100 rounded-lg" src={imagePreview} alt="Pokemon Preview" />
                            ) : (
                                <div className="w-[20vw] h-[10vw] border border-zinc-100 rounded-lg flex justify-center items-center">
                                    <p className="text-white text-xl">No image selected</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Gender-1 and 2 */}
                    <div className="w-full flex flex-wrap justify-center gap-2 bg-black p-4 border border-zinc-100 rounded-lg mx-10">
                        {/* Gender-1 */}
                        <div className="flex items-center">
                            {/* <input id="Gender1" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("gender1")} placeholder="Gender-1" type="file" /> */}
                            <Checkbox
                                {...register("gender1")}
                                color="blue"
                                label={
                                    <Typography color="white">
                                        Male
                                    </Typography>
                                } />
                        </div>

                        {/* Gender-2 */}
                        <div className="flex items-center">
                            {/* <input id="Gender2" className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("gender2")} placeholder="Gender-1" type="file" /> */}
                            <Checkbox
                            {...register("gender2")}
                                color="red"
                                label={
                                    <Typography color="white">
                                        Female
                                    </Typography>
                                } />
                        </div>
                    </div>

                    {/* Ability, Category, Height, Weight */}
                    <div className="w-full flex flex-wrap justify-center gap-3 bg-black p-4 border border-zinc-100 rounded-lg mx-10">
                        {/* Ability */}
                        <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("ability", { required: true })} placeholder="Ability" type="text" />

                        {/* Category */}
                        <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("category", { required: true })} placeholder="Category" type="text" />

                        {/* Height */}
                        <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("height", { required: true })} placeholder="Height" type="text" />

                        {/* Weight */}
                        <input className="w-[20vw] rounded-lg bg-zinc-800 text-white" {...register("weight", { required: true })} placeholder="Weight" type="text" />
                    </div>

                    {/* Weaknesses */}
                    <div className="w-[50vw] min-h-[8vw] border border-zinc-100 p-4 bg-black rounded-lg">
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

                        <div className="w-full flex justify-center mt-4 text-white">
                            <h1 onClick={resetWeaknessSelection} className="bg-red-600 px-10 py-3 rounded-lg cursor-pointer">Reset</h1>
                        </div>
                    </div>

                    {/* Description */}
                    <textarea rows="10" cols="100" className="resize-none rounded-lg bg-black text-white" {...register("description", { required: true })} placeholder="Description"></textarea>

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>

            </div>

            <To_AdminDash />

        </div>
    )
}
export default New_Pokemon

