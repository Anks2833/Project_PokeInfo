import { useForm } from 'react-hook-form';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from "react-toastify";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useState } from 'react';

const AdminPanel = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {

    try {

      const response = await axios.post('https://project-pokeinfo.onrender.com/api/v1/user/login', data);
      if (response.status === 200) {
        navigate('/admindashboard');
      } else {
        console.log('Failed status:', response.status);
        alert('Login failed');
      }

    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message || "Login failed");
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (

    <div className="w-full h-screen bg-zinc-300 flex">

      <div className="w-1/2 h-screen flex flex-col justify-center bg-[#121212]">

        {/* Heading */}
        <div className="w-full flex flex-col items-center justify-center text-white">
          <h1 className="nav-heading text-zinc-100 text-[5vw] font-bold leading-none">POKEINFO</h1>
          <h1 className="nav-heading text-amber-500 text-[2vw] font-light leading-none">Admin Login</h1>
        </div>

        {/* Login form */}
        <div className="w-full mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-2">
            <input className="w-[23vw] rounded-lg bg-zinc-900 outline-none text-white" {...register("username", { required: true })} required type="text" placeholder="Enter username" />
            <input
              className="relative w-[23vw] rounded-lg bg-zinc-900 outline-none text-white"
              {...register("password", { required: true })}
              required
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
            />
            <div className="absolute inset-y-[28.2vw] inset-x-[34vw] cursor-pointer text-white" onClick={togglePasswordVisibility}>
              {passwordVisible ? <IoEyeSharp className="text-xl text-white" /> : <IoEyeOffSharp className="text-xl text-white" />}
            </div>
            <input className="w-[23vw] bg-purple-600 font-semibold rounded-lg text-white text-lg px-8 py-2 mt-2 cursor-pointer" type="submit" value="Log In" />
          </form>
        </div>

      </div>

      <div className="w-1/2 h-screen bg-[url('https://res.cloudinary.com/dlchhddqg/image/upload/v1724486623/uploads/Images/qbsgql0dmjoeeer0z7sz.jpg')] bg-cover bg-center bg-no-repeat"></div>


    </div>
  )
}
export default AdminPanel