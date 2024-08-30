//A component to delete a pokemon through admin dashboard
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import To_AdminDash from "./To_AdminDash";
import { motion } from "framer-motion";

const Delete_Pokemon = () => {

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

    const { register, handleSubmit, reset } = useForm();
    const [deletePokemon, setDeletePokemon] = useState('');

    const onSubmit = async (data) => {

        await axios.delete('https://project-pokeinfo.onrender.com/api/pokedex', { data })
            .then((response) => {
                setDeletePokemon(`Pokemon #${response.data.number} deleted`)
            })
            .catch((err) => {
                console.log(err.message);
            });

        reset()
    };

    const handleCloseButton = () => {
        setDeletePokemon("")
    }

    return (
        //Remove Pokemon
        <div className="w-full min-h-screen bg-zinc-950 pt-20 flex flex-col items-center gap-6">

            <div>
                <h1 className="text-white text-4xl">Delete A Pokémon</h1>
            </div>

            <div className="w-[40vw] min-h-32 border border-zinc-100 bg-zinc-900 rounded-xl mb-10 p-10">

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number")} required placeholder="Number" type="number" />
                    <input type="submit" value="Delete" className="px-10 py-2 rounded-lg bg-red-600 text-white cursor-pointer" />
                </form>

                {deletePokemon != "" ? (
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
                        <div className="ml-3 text-sm font-normal">{deletePokemon}</div>
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
export default Delete_Pokemon