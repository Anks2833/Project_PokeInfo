// This is the parent component that describes the evolution details

import Evolution_Details from "./Evolution_Details";
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Evolution_Details_Parent = () => {
    return (
        <>
            <div className="w-full rounded-3xl bg-[#00091D] flex flex-col items-center py-10 border border-zinc-700 shadow shadow-violet-600">

                {/* The heading */}
                <div className="w-full flex justify-center"><h1 className="text-5xl text-sky-500 font-semibold">Evolution</h1></div>

                {/* The evolving pokemons */}
                <div className="w-full flex gap-20 justify-center">
                    <div><Evolution_Details /></div>
                    <div className="text-7xl flex items-center text-amber-300"><RiArrowRightDoubleFill /></div>
                    <div><Evolution_Details /></div>
                    <div className="text-7xl flex items-center text-amber-300"><RiArrowRightDoubleFill /></div>
                    <div><Evolution_Details /></div>
                </div>

            </div>
        </>
    )
}
export default Evolution_Details_Parent