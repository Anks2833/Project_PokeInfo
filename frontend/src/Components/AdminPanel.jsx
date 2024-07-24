import React from "react"



const AdminPanel = () => {
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
            <form className="w-full flex flex-col items-center gap-2">
                <input className="w-[23vw] rounded-lg bg-zinc-900 outline-none text-white" type="email" placeholder="Enter email" />
                <input className="w-[23vw] rounded-lg bg-zinc-900 outline-none text-white" type="password" placeholder="Enter password" />
                <input className="w-[23vw] bg-purple-600 font-semibold rounded-lg text-white text-lg px-8 py-2 mt-2 cursor-pointer" type="button" value="Log In" />
            </form>
        </div>

        </div>

        <div className="w-1/2 h-screen bg-[url('/images/adminlogin-image.jpg')] bg-cover bg-center bg-no-repeat"></div>


    </div>
  )
}
export default AdminPanel