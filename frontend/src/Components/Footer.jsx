import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (


        <footer className="bg-[#00091D] shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="/images/pokeball_pixel.png" className="h-12" alt="Pokeball Logo" />
                        </a>

                        <div className="flex flex-col gap-2">
                            <div>
                                <h1 className="text-zinc-200">Connect with me</h1>
                            </div>

                            <div className="flex gap-4 items-center text-white text-2xl">
                                <FaInstagram />
                                <FaLinkedin />
                                <FaDiscord />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center text-xl text-zinc-200">
                        <h1>Made By ANKS</h1>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">pokeInfo™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
export default Footer