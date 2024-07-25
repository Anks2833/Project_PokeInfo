// The evolution details of a pokemon. This component describes a particular card


const Evolution_Details = () => {
  return (

    <div className="py-12 flex flex-col items-center gap-2">

        {/* Image */}
        <div className="bg-zinc-900 border-[6px] border-white rounded-full">
            <img src="/images/001.png" alt="noimg" />
        </div>

        {/* Number */}
        <div className="flex flex-col items-center">
            <h1 className="text-3xl">001</h1>
            <h1 className="text-3xl">Bulbasaur</h1>
        </div>

        {/* Types */}
        <div className="flex gap-2">
            {/* Type-1 */}
            <div>
                <h1 className="text-2xl bg-emerald-600 px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner">Grass</h1>
            </div>

            {/* Type-2 */}
            <div>
                <h1 className="text-2xl bg-violet-600 px-10 py-2 rounded-full border border-zinc-900 shadow-black shadow-inner">Poison</h1>
            </div>
        </div>

    </div>
  )
}
export default Evolution_Details