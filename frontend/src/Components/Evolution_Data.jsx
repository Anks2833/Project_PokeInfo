import { useForm } from 'react-hook-form';
import axios from "axios"
import { motion } from "framer-motion"
import To_AdminDash from "./To_AdminDash";
import { useState, useEffect } from 'react';


const Evolution_Data = () => {

    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    const { register, handleSubmit, setValue, reset } = useForm();

    const [selectedPokemon1, setSelectedPokemon1] = useState(null);
    const [selectedPokemon2, setSelectedPokemon2] = useState(null);
    const [selectedPokemon3, setSelectedPokemon3] = useState(null);
    const [pokemon, setPokemon] = useState([]);

    const [createdEvolution, setCreatedEvolution] = useState("")

    // To get data of all pokemons
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://project-pokeinfo.onrender.com/api/pokedex');
                setPokemon(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error.message);
                setPokemon([]);
            }
        };

        fetchData();
    }, []);


    const onSubmit = async (data) => {

        let formData = new FormData()
        formData.append('name1', data.name1);
        formData.append('number1', data.number1);
        formData.append('evolution1', data.evolution1);
        formData.append('type11', data.type11);
        formData.append('type21', data.type21);
        formData.append('name2', data.name2);
        formData.append('number2', data.number2);
        formData.append('evolution2', data.evolution2);
        formData.append('type12', data.type12);
        formData.append('type22', data.type22);
        formData.append('name3', data.name3);
        formData.append('number3', data.number3);
        formData.append('evolution3', data.evolution3);
        formData.append('type13', data.type13);
        formData.append('type23', data.type23);

        await axios.post('https://project-pokeinfo.onrender.com/api/evolution', formData)
            .then((response) => {
                console.log(response.data);
                setCreatedEvolution(`Evolution data for #${response.data.name1} created successfully`)
            })
            .catch((err) => {
                console.log(err.message);
            })

        reset()
    };

    const handleCloseButton = () => {
        setCreatedEvolution("")
    }

    const handleNumberChange1 = (e) => {
        const numberValue = e.target.value;
        const foundPokemon = pokemon.find(p => p.number === numberValue.padStart(3, '0'));
        setSelectedPokemon1(foundPokemon || null);
        if (foundPokemon) {
            setValue('name1', foundPokemon.name);
            setValue('type11', foundPokemon.type1);
            setValue('type21', foundPokemon.type2);
            setValue('evolution1', foundPokemon.image);
        } else {
            reset({ name1: '', type11: '', type21: '', evolution1: '' });
        }
    };

    const handleNumberChange2 = (e) => {
        const numberValue = e.target.value;
        const foundPokemon = pokemon.find(p => p.number === numberValue.padStart(3, '0'));
        setSelectedPokemon2(foundPokemon || null);
        if (foundPokemon) {
            setValue('name2', foundPokemon.name);
            setValue('type12', foundPokemon.type1);
            setValue('type22', foundPokemon.type2);
            setValue('evolution2', foundPokemon.image);
        } else {
            reset({ name2: '', type12: '', type22: '', evolution2: '' });
        }
    };

    const handleNumberChange3 = (e) => {
        const numberValue = e.target.value;
        const foundPokemon = pokemon.find(p => p.number === numberValue.padStart(3, '0'));
        setSelectedPokemon3(foundPokemon || null);
        if (foundPokemon) {
            setValue('name3', foundPokemon.name);
            setValue('type13', foundPokemon.type1);
            setValue('type23', foundPokemon.type2);
            setValue('evolution3', foundPokemon.image);
        } else {
            reset({ name3: '', type13: '', type23: '', evolution3: '' });
        }
    };


    return (

        // Evolution data
        <div className="w-full min-h-screen bg-zinc-950 pt-20 flex flex-col items-center gap-6">

            <div>
                <h1 className="text-white text-4xl">Pokémon Evolution Data</h1>
            </div>

            <div className="w-[60vw] min-h-32 border border-zinc-100 bg-zinc-900 rounded-xl mb-10 p-10">

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>

                    {/* First Pokemon */}
                    <div className='w-[50vw] flex flex-col gap-5 border p-4 rounded-lg bg-black mt-5'>
                        {/* Name1 And Number1*/}
                        <div className="flex items-center gap-4">
                            <h1 className="text-white">Number1:</h1>
                            <input
                                className="w-[24vw] rounded-lg bg-zinc-800 text-white"
                                {...register("number1", { onChange: handleNumberChange1 })}
                                placeholder="Number1"
                                required
                                type="text"
                            />
                        </div>

                        {
                            selectedPokemon1 && (
                                <>

                                    {/* Type1-1 and Type2-1 */}
                                    <div className="flex items-center justify-center gap-6">
                                        <div className="w-full flex flex-col justify-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Name1:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name1")} readOnly type="text" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Type11:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type11")} readOnly type="text" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Type12:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type21")} readOnly type="text" />
                                        </div>

                                        {/* Evolution1 Image */}
                                        <div className='flex items-center gap-2'>
                                            <label className="text-white" htmlFor="Image">Pokemon-Image1:</label>
                                            <input className="w-[20.5vw] rounded-lg bg-zinc-800 text-white" {...register("evolution1")} readOnly type="text" />
                                        </div>
                                        </div>

                                        <div className="w-full h-60">
                                            <img src={selectedPokemon1.image} alt="no-img" />
                                        </div>
                                    </div>

                                </>
                            )
                        }
                    </div>

                    {/* Second Pokemon */}
                    <div className='w-[50vw] flex flex-col gap-5 border p-4 rounded-lg bg-black mt-5'>

                        {/* Number2*/}
                        <div className="flex items-center gap-4">
                            <h1 className="text-white">Number2:</h1>
                            <input
                                className="w-[24vw] rounded-lg bg-zinc-800 text-white"
                                {...register("number2", { onChange: handleNumberChange2 })}
                                placeholder="Number2"
                                required
                                type="text"
                            />
                        </div>

                        {
                            selectedPokemon2 && (
                                <>

                                    {/* Type1-2 and Type2-2 */}
                                    <div className="flex items-center justify-center gap-6">
                                        <div className="w-full flex flex-col justify-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Name2:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name2")} readOnly type="text" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Type12:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type12")} readOnly type="text" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Type12:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type22")} readOnly type="text" />
                                        </div>

                                        {/* Evolution2 Image */}
                                        <div className='flex items-center gap-2'>
                                            <label className="text-white" htmlFor="Image">Pokemon-Image2:</label>
                                            <input className="w-[20.5vw] rounded-lg bg-zinc-800 text-white" {...register("evolution2")} readOnly type="text" />
                                        </div>
                                        </div>

                                        <div className="w-full h-60">
                                            <img src={selectedPokemon2.image} alt="no-img" />
                                        </div>
                                    </div>

                                </>
                            )
                        }
                    </div>

                    {/* Third Pokemon */}
                    <div className='w-[50vw] flex flex-col gap-5 border p-4 rounded-lg bg-black mt-5'>

                        {/* Number3*/}
                        <div className="flex items-center gap-4">
                            <h1 className="text-white">Number3:</h1>
                            <input
                                className="w-[24vw] rounded-lg bg-zinc-800 text-white"
                                {...register("number3", { onChange: handleNumberChange3 })}
                                placeholder="Number3"
                                type="text"
                            />
                        </div>

                        {
                            selectedPokemon3 && (
                                <>

                                    {/* Type1-3 and Type2-3 */}
                                    <div className="flex items-center justify-center gap-6">
                                        <div className="w-full flex flex-col justify-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Name3:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("name3")} readOnly type="text" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Type13:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type13")} readOnly type="text" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h1 className="text-white">Type13:</h1>
                                            <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("type23")} readOnly type="text" />
                                        </div>

                                        {/* Evolution2 Image */}
                                        <div className='flex items-center gap-2'>
                                            <label className="text-white" htmlFor="Image">Pokemon-Image3:</label>
                                            <input className="w-[20.5vw] rounded-lg bg-zinc-800 text-white" {...register("evolution3")} readOnly type="text" />
                                        </div>
                                        </div>

                                        <div className="w-full h-60">
                                            <img src={selectedPokemon3.image} alt="no-img" />
                                        </div>
                                    </div>

                                </>
                            )
                        }
                    </div>

                    {/* Submit Button */}
                    <input className="bg-blue-600 px-32 py-3 mt-10 rounded-xl text-white text-xl font-semibold cursor-pointer" type="submit" value="Create" />

                </form>

                {createdEvolution != "" ? (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        id="toast-success"
                        className="fixed bottom-2 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                        role="alert"
                    >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ml-3 text-sm font-normal">{createdEvolution}</div>
                        <button
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            onClick={handleCloseButton}
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </motion.div>
                ) : null}
            </div>

            <To_AdminDash />

        </div>
    )
}
export default Evolution_Data