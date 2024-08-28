import { NavLink, useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";


const AdminDashboard = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('https://project-pokeinfo.onrender.com/api/v1/user/profile', { withCredentials: true });
                if (response.status === 200) {  
                    setUsername(response.data.userProfile.username)
                    setImage(response.data.userProfile.image)
                }
            } catch (error) {
                console.error('Authentication check failed:', error);
                navigate('/adminlogin')
            }
        };

        checkAuth();
    }, []);

    const logOut = async () => {

        try {

            const response = await axios.post('https://project-pokeinfo.onrender.com/api/v1/user/logout');

            if (response.data.isAuthenticated === false) {
                navigate('/adminlogin');
            } else {
                console.log('Failed status:', response.status); // Debugging: Log the failed status
                alert('Cannot Log Out');
            }

        } catch (error) {
            console.error('Error:', error.response?.data?.message || error.message || "Logout failed");
            alert(error.response?.data?.message || "Logout failed");
        }

    }

    return (

        <div className="relative min-h-screen w-full bg-black" >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                {/* The welcome text with image */}
                <div className="w-full flex flex-col gap-2 items-center pt-20">
                    <div className="w-32 h-32 border border-teal-200 rounded-full overflow-hidden">
                        <img className="w-full" src={image} alt="" />
                    </div>

                    <div className="flex gap-2 text-white">
                        <h1 className="link-text text-2xl font-bold">WELCOME,</h1>
                        <h1 className="link-text text-2xl text-emerald-400">{username.charAt(0).toUpperCase() + username.slice(1)}</h1>
                    </div>
                </div>

                {/* Description */}
                <div className="w-full flex justify-center text-3xl text-white mt-4">
                    <p>As an admin you can do wonders:</p>
                </div>

                {/* Links */}
                <div className="w-full flex justify-center gap-5 mt-20">

                    {/* New Pokemon */}
                    <NavLink to="/new_pokemon" className="w-fit text-white flex items-center gap-2 hover:text-emerald-400 underline cursor-pointer transition-all">
                        <h1>Create A New Pokémon</h1>
                        <div><FaExternalLinkAlt /></div>
                    </NavLink>

                    {/* Remove Pokemon */}
                    <NavLink to="/delete_pokemon" className="w-fit text-white flex items-center gap-2 hover:text-emerald-400 underline cursor-pointer transition-all">
                        <h1>Delete A Pokémon</h1>
                        <div><FaExternalLinkAlt /></div>
                    </NavLink>

                    {/* Evolution Data */}
                    <NavLink to="/evolution_data" className="w-fit text-white flex items-center gap-2 hover:text-emerald-400 underline cursor-pointer transition-all">
                        <h1>Pokémon Evolution Data</h1>
                        <div><FaExternalLinkAlt /></div>
                    </NavLink>

                    {/*Stats*/}
                    <NavLink to="/stats_data" className="w-fit text-white flex items-center gap-2 hover:text-emerald-400 underline cursor-pointer transition-all">
                        <h1>Pokémon Stats Data</h1>
                        <div><FaExternalLinkAlt /></div>
                    </NavLink>

                    {/* Ability */}
                    <NavLink to="/ability_data" className="w-fit text-white flex items-center gap-2 hover:text-emerald-400 underline cursor-pointer transition-all">
                        <h1>Pokémon Ability Data</h1>
                        <div><FaExternalLinkAlt /></div>
                    </NavLink>

                </div>

                {/* Logout button */}
                <div className="mt-32 flex items-center justify-center">
                    <button onClick={logOut} className="text-white bg-red-600 px-6 py-2 rounded-xl cursor-pointer">Log out</button>
                </div>

            </div>
        </div>

    )
}
export default AdminDashboard


