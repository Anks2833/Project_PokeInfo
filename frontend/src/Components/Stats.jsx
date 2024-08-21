import axios from "axios";
import { Progress } from "flowbite-react";
import { useState, useEffect } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";


const Stats = (props) => {

    const { number } = props

    const [stats, setStats] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/stats`);
                const foundStat = response.data.find(stat => stat.number === number);
                if (foundStat) {
                    setStats([foundStat]); // Assuming stats per Pokémon are unique, wrap in an array
                } else {
                    throw new Error('No stats found for this Pokémon.');
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, [number]);

    // console.log(stats);

    return (

        <>

            <div className="w-full rounded-3xl bg-[#00091D] hidden sm:flex flex-col items-center py-10 border border-zinc-700 shadow shadow-violet-600">

                <div><h1 className="text-5xl text-sky-500 font-semibold">Pokémon Stats</h1></div>

                {stats.length > 0 ?

                    <div className='w-full flex items-start px-40 gap-6 my-10'>

                        {/* Part-1 */}
                        <div className='w-1/2 flex flex-col items-center px-40 gap-6'>
                            {/* HP */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl'>HP</h1>
                                <div className='w-72'><Progress progress={stats[0].hp} color={stats[0].hp <= 30 ? "red" : stats[0].hp <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Attack */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl'>ATTACK</h1>
                                <div className='w-72'><Progress progress={stats[0].attack} color={stats[0].attack <= 30 ? "red" : stats[0].attack <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Defense */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl'>DEFENSE</h1>
                                <div className='w-72'><Progress progress={stats[0].defense} color={stats[0].defense <= 30 ? "red" : stats[0].defense <= 60 ? "yellow" : "green"} /></div>
                            </div>
                        </div>

                        {/* Part-2 */}
                        <div className='w-1/2 flex flex-col items-center px-40 gap-6'>
                            {/* Special Attack */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl'>Special Attack</h1>
                                <div className='w-72'><Progress progress={stats[0].specialattack} color={stats[0].specialattack <= 30 ? "red" : stats[0].specialattack <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Special Defense */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl'>Special Defense</h1>
                                <div className='w-72'><Progress progress={stats[0].specialdefense} color={stats[0].specialdefense <= 30 ? "red" : stats[0].specialdefense <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Speed */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl'>Speed</h1>
                                <div className='w-72'><Progress progress={stats[0].speed} color={stats[0].speed <= 30 ? "red" : stats[0].speed <= 60 ? "yellow" : "green"} /></div>
                            </div>
                        </div>

                    </div> :

                    <div className="w-full flex justify-center items-center text-4xl px-40 gap-6 my-10">
                        <h1>No Stats Found For This Pokémon</h1>
                    </div>
                }

            </div>

            {/* For mobile */}
            <div className="w-full sm:hidden flex flex-col justify-start gap-2 items-center py-3">

                <div className="w-full flex justify-start items-end gap-1 pl-2 border-b border-b-zinc-600">
                    <div className="text-3xl"><MdOutlineDoubleArrow /></div>
                    <h1 className="text-blue-500 text-3xl">Base Stats</h1>
                </div>

                {stats.length > 0 ?

                    <div className='w-full flex flex-col items-start gap-3 my-3'>

                        {/* Part-1 */}
                        <div className='w-1/2 flex flex-col items-center px-40 gap-3'>
                            {/* HP */}
                            <div className='flex flex-col'>
                                <h1 className='text-lg'>HP</h1>
                                <div className='w-72'><Progress progress={stats[0].hp} color={stats[0].hp <= 30 ? "red" : stats[0].hp <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Attack */}
                            <div className='flex flex-col'>
                                <h1 className='text-lg'>ATTACK</h1>
                                <div className='w-72'><Progress progress={stats[0].attack} color={stats[0].attack <= 30 ? "red" : stats[0].attack <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Defense */}
                            <div className='flex flex-col'>
                                <h1 className='text-lg'>DEFENSE</h1>
                                <div className='w-72'><Progress progress={stats[0].defense} color={stats[0].defense <= 30 ? "red" : stats[0].defense <= 60 ? "yellow" : "green"} /></div>
                            </div>
                        </div>

                        {/* Part-2 */}
                        <div className='w-1/2 flex flex-col items-center px-40 gap-3'>
                            {/* Special Attack */}
                            <div className='flex flex-col'>
                                <h1 className='text-lg'>Special Attack</h1>
                                <div className='w-72'><Progress progress={stats[0].specialattack} color={stats[0].specialattack <= 30 ? "red" : stats[0].specialattack <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Special Defense */}
                            <div className='flex flex-col'>
                                <h1 className='text-lg'>Special Defense</h1>
                                <div className='w-72'><Progress progress={stats[0].specialdefense} color={stats[0].specialdefense <= 30 ? "red" : stats[0].specialdefense <= 60 ? "yellow" : "green"} /></div>
                            </div>

                            {/* Speed */}
                            <div className='flex flex-col'>
                                <h1 className='text-lg'>Speed</h1>
                                <div className='w-72'><Progress progress={stats[0].speed} color={stats[0].speed <= 30 ? "red" : stats[0].speed <= 60 ? "yellow" : "green"} /></div>
                            </div>
                        </div>

                    </div> :

                    <div className="w-full flex justify-center items-center text-4xl px-40 gap-6 my-10">
                        <h1>No Stats Found For This Pokemon</h1>
                    </div>
                }

            </div>

        </>
    )
}
export default Stats