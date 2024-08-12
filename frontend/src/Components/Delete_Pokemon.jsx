//A component to delete a pokemon through admin dashboard
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"
import To_AdminDash from "./To_AdminDash";


const Delete_Pokemon = () => {

    const { register, handleSubmit, reset } = useForm();
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



    return (
        //Remove Pokemon
        <div className="w-full min-h-screen bg-zinc-950 pt-20 flex flex-col items-center gap-6">

            <div>
                <h1 className="text-white text-4xl">Delete A Pokémon</h1>
            </div>

            <div className="w-[40vw] min-h-32 border border-zinc-100 bg-zinc-900 rounded-xl mb-10 p-10">

                <form className="flex flex-wrap justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-[25vw] rounded-lg bg-zinc-800 text-white" {...register("number")} placeholder="Number: Enter In A Format Like This 002" type="number" />
                    <input type="submit" value="Delete" className="px-10 py-2 rounded-lg bg-red-600 text-white cursor-pointer" />
                </form>

                <div>
                    <h1 className="w-full text-white text-2xl text-center mt-6">
                        {deletePokemon}
                    </h1>
                </div>

            </div>

            <To_AdminDash />

        </div>
    )
}
export default Delete_Pokemon