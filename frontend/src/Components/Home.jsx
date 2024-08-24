import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'


const Home = () => {

  const [videoUrl] = useState("https://res.cloudinary.com/dlchhddqg/video/upload/v1724484940/uploads/Videos/i623fzz7ibdqasrhcndk.mp4")


  return (
    <div className="relative w-full h-screen">

      {/* The Image for Mobile */}
      <div className='w-full h-screen flex sm:hidden'>
        <img className='w-full h-full object-cover object-center brightness-[0.3]' src="https://res.cloudinary.com/dlchhddqg/image/upload/v1724486568/uploads/Images/ovge6i5v8bpzqlo8d0aw.jpg" alt="" />
      </div>

      {/* The 3d animation */}
      <div className="hidden sm:block w-full h-screen brightness-50 overflow-hidden">
        <video autoPlay loop muted src={videoUrl}></video>
      </div>


      {/* Links */}
      <div className="absolute px-0 w-fit hidden sm:flex justify-center bottom-[2%] right-[52.5%] translate-x-[50%] gap-5">
        <motion.div
          className="w-full flex items-center gap-6"
          animate={{ opacity: [1, 0, 1] }} // Fade out to 0, then back to 1
          transition={{
            duration: 1, // 1 second for the full cycle
            repeat: Infinity, // Repeat infinitely
            ease: 'easeInOut',
          }}
        >
          <NavLink className="link-text1 w-full flex items-center justify-center text-zinc-100 text-3xl px-8 py-2 font-semibold" to="/pokedex">Touch To Start</NavLink>
        </motion.div>
      </div>

      {/* Link for mobile devices */}
      <div className="absolute w-full px-24 sm:hidden flex justify-center top-[75vw] gap-5">
        <div className="w-full flex items-center gap-6">
          <NavLink className="link-text w-full rounded-lg shadow-md shadow-black flex items-center justify-center text-zinc-950 px-8 py-2 bg-amber-400 font-semibold" to="/pokedex">Pokédex</NavLink>
        </div>
      </div>

      {/* The pokeball image for mobile */}
      <div className='flex justify-center w-full absolute top-24 sm:hidden'>
        <img className='w-32' src="https://res.cloudinary.com/dlchhddqg/image/upload/v1724486335/uploads/Images/butwyfgyhpo6rcmicyx3.png" alt="noimg" />
      </div>

      {/* Welcome text */}
      <div className="w-full flex justify-center">
        <h1 className="welcome-text absolute z-0 flex justify-center sm:right-[30vw] top-[60vw] sm:top-[1vw] text-amber-400 text-[8vw] sm:text-[5vw]">WELCOME TRAINER</h1>
      </div>

    </div>
  )
}
export default Home