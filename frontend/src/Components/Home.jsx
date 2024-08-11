import { NavLink } from 'react-router-dom'


const Home = () => {


  return (
    <div className="relative w-full h-screen">

      {/* The 3d animation */}
      <div className="w-full h-screen brightness-50 overflow-hidden">
        <video autoPlay loop muted src="/videos/infernape.mp4"></video>
      </div>

      {/* Links */}
      <div className="absolute top-[20%] right-[35vw] translate-x-[60%] flex gap-5">
        <div className="w-full flex items-center gap-6">
          <NavLink className="link-text w-full rounded-lg hover:rounded-xl hover:transition-all hover:scale-95 shadow-md shadow-black flex items-center justify-center text-zinc-900 px-8 py-2 bg-amber-400 font-semibold" to="/pokedex">Pokédex</NavLink>
        </div>
      </div>

      {/* image art */}
      <div className="w-full flex justify-center">
        <h1 className="welcome-text absolute z-0 right-[30vw] top-[3vw] text-amber-400 text-[5vw]">WELCOME TRAINER</h1>
      </div>

    </div>
  )
}
export default Home