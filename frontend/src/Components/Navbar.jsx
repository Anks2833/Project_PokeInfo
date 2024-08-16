import { useEffect, useState, useRef } from "react"
import { NavLink } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa"
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Modal from "./Modal";


const Navbar = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const togglePlayPause = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    if (audioRef.current) {
      if (newIsPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };


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

      <div className="w-full h-full flex justify-between items-center px-3 sm:px-12">

        {/* The pokeball icon along with the heading */}
        <NavLink to="/" className="hidden sm:flex">
          <div className="w-full flex items-center gap-1">
            <img className="w-10 h-10" src="/images/pokeball_pixel.png" alt="no-image" />
            <h1 className="nav-heading text-zinc-300 font-extrabold text-3xl">pokeInfo</h1>
          </div>
        </NavLink>

        {/* The info button on top-right and the modal */}
        <div className="w-full text-3xl flex justify-end items-center text-white gap-5">
          <div className="w-fit text-5xl cursor-pointer sm:flex hidden" onClick={togglePlayPause}>
            {isPlaying ? <GiSoundOn /> : <GiSoundOff />}
          </div>
          <audio ref={audioRef} loop src="/audios/pokeAudio.mp3"></audio>

          <div onClick={openModal} className="mt-[12vw] sm:mt-0 w-fit cursor-pointer sm:hover:text-sky-500 transition-all">
            <FaInfoCircle />
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* Heading */}
            <div className="w-full pb-0 sm:pb-1 flex justify-between items-center border-b-[1px] border-b-white">
              <h1 className="text-lg sm:text-2xl font-bold">pokéInfo</h1>
              <button onClick={closeModal} className="text-sm sm:text-lg sm:hover:text-red-600 flex justify-center items-center transition-all p-3 rounded">
                <ImCross />
              </button>
            </div>

            {/* Description */}
            <div className="w-full py-2 sm:py-5">

              <div className="w-full"><h1 className="text-sm sm:text-xl font-semibold">Developed By</h1></div>
              <div className="w-full"><h1 className="text-xs sm:text-lg font-extralight">Ankur Dubey</h1></div>
              <div className="w-full"><NavLink to="https://github.com/anks2833" target="_blank" className="text-xs sm:text-lg font-light border-b-[1px] text-blue-600 border-b-blue-600">https://github.com/anks2833</NavLink></div>

            </div>

            {/* Socials */}
            <div className="w-full flex gap-2">
              <div className="text-lg sm:hover:text-[#C13584] transition-all"><FaInstagram /></div>
              <div className="text-lg sm:hover:text-blue-600 transition-all"><FaLinkedin /></div>
            </div>
          </Modal>
        </div>

      </div>

    </div>
  )
}
export default Navbar