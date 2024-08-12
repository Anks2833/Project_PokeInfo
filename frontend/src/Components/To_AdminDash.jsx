import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const To_AdminDash = () => {
    return (
        <div className="group mb-10">
            <NavLink to="/admindashboard" className="w-fit text-white text-2xl flex items-center gap-2 cursor-pointer transition-all">
                <div className="text-white group-hover:-translate-x-1 transition-all duration-200 ease-in-out">
                    <FaArrowAltCircleLeft />
                </div>
                <h1 className="text-white hover:text-sky-600 transition-all">Back To AdminDashboard</h1>
            </NavLink>
        </div>
    )
}

export default To_AdminDash