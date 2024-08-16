import { NavLink } from 'react-router-dom'


const Home = () => {


  return (
    <div className="relative w-full h-screen">

      {/* The Image for Mobile */}
      <div className='w-full h-screen flex sm:hidden'>
        <img className='w-full h-full object-cover object-center brightness-[0.3]' src="/images/eeve.jpg" alt="" />
      </div>

      {/* The 3d animation */}
      <div className="hidden sm:block w-full h-screen brightness-50 overflow-hidden">
        <video autoPlay loop muted src="/videos/infernape.mp4"></video>
      </div>


      {/* Links */}
      <div className="absolute w-full px-24 sm:px-0 sm:w-fit flex justify-center top-[75vw] sm:top-[20%] sm:right-[35vw] sm:translate-x-[60%] sm:flex gap-5">
        <div className="w-full flex items-center gap-6">
          <NavLink className="link-text w-full rounded-lg sm:hover:rounded-xl sm:hover:transition-all sm:hover:scale-95 shadow-md shadow-black flex items-center justify-center text-zinc-900 px-8 py-2 bg-amber-400 font-semibold" to="/pokedex">Pokédex</NavLink>
        </div>
      </div>

      {/* THe pokeball image for mobile */}
      <div className='flex justify-center w-full absolute top-20 sm:hidden'>
        <img className='w-40' src="/images/pokeball.png" alt="noimg" />
      </div>

      {/* image art */}
      <div className="w-full flex justify-center">
        <h1 className="welcome-text absolute z-0 flex justify-center sm:right-[30vw] top-[60vw] sm:top-[3vw] text-amber-400 text-[8vw] sm:text-[5vw]">WELCOME TRAINER</h1>
      </div>

    </div>
  )
}
export default Home