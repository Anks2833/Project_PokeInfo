import React, { useEffect, useState } from "react"
import { FaInfoCircle } from "react-icons/fa"
import { NavLink } from "react-router-dom";



const Navbar = () => {

  // State variables to manage scroll behavior
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-100); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    top: `${top}px`,
    width: '100%',
    transition: 'top 0.3s',
  };

  return (

    <div className="fixed top:[{top}px] z-[1] w-full h-[6vw] flex justify-between items-center" style={navbarStyle}>

      <div className="w-full h-full flex justify-between items-center px-12">

        {/* The pokeball icon along with the heading */}
        <NavLink to="/">
          <div className="w-full flex items-center gap-1">
            <img className="w-10 h-10" src="/images/pokeball_pixel.png" alt="no-image" />
            <h1 className="nav-heading text-zinc-300 font-extrabold text-3xl">pokeInfo</h1>
          </div>
        </NavLink>

        {/* The info button on top-right and the modal */}
        <div className="w-full text-3xl flex justify-end items-center text-white">
          <FaInfoCircle />
        </div>

      </div>

    </div>
  )
}
export default Navbar