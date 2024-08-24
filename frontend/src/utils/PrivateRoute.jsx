import { NavLink } from 'react-router-dom';

const PrivateRoute = () => {
    return (
        <div className="w-full h-screen bg-zinc-950 flex flex-col items-center justify-center gap-6">
            <h1 className="text-zinc-100 text-3xl">You are not authorized to access this page</h1>
            <NavLink className="text-white mt-20 bg-blue-600 px-6 py-2 rounded-xl" to="/adminlogin">Back To Login Page</NavLink>
        </div>
    );
};

export default PrivateRoute;