import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Heading_Mobile = (props) => {
    return (

        <div className="w-full h-[10vh] bg-red-700 px-3 flex items-center fixed top-0 z-10  text-2xl sm:hidden">
            <NavLink to={props.to} className="text-white text-3xl flex"><MdKeyboardDoubleArrowLeft /></NavLink>
            <div className="text-white"><h1 className="font-bold">{props.name}</h1></div>
        </div>

    )
}

export default Heading_Mobile