import { useState } from "react"
import { NavLink } from "react-router-dom"


const Not_Found = () => {

    const [trioImageUrl] = useState("https://res.cloudinary.com/dlchhddqg/image/upload/v1724486221/uploads/Images/ulevvqndefo80ukidqfn.png")

    return (

        <div className="w-full h-screen bg-black text-white flex justify-center items-center">

            <div className="flex flex-col justify-center items-center gap-6">

                <div className="w-52">
                    <img src={trioImageUrl} alt="pokemon trio" />
                </div>

                <div className="flex flex-col items-center">
                    <div>
                        <h1 className="text-3xl text-red-700">404</h1>
                    </div>

                    <div>
                        <h1 className="text-5xl">Page Not Found</h1>
                    </div>

                    <div className="pt-6">
                        <p>Sorry, we couldn’t find the page you’re looking for.</p>
                    </div>
                </div>

                {/* Links */}
                <div className="mt-10">
                    <NavLink to="/" className="w-fit bg-blue-600 px-6 py-2 rounded-lg">Go Back Home</NavLink>
                </div>

            </div>
        </div>

    )
}

export default Not_Found