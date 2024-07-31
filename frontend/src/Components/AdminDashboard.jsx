import New_Pokemon from "./New_Pokemon";
import Delete_Pokemon from "./Delete_Pokemon";
import Evolution_Data from "./Evolution_Data";
import New_Stats from "./New_Stats";

const AdminDashboard = () => {

    return (

        <div className="w-full min-h-screen bg-zinc-900">

            {/* The welcome text with image */}
            <div className="w-full flex flex-col gap-2 items-center pt-20">
                <div className="w-32 h-32 border border-teal-200 rounded-full">
                    <img src="" alt="" />
                </div>

                <div className="flex gap-2 text-white">
                    <h1 className="link-text text-2xl font-bold">WELCOME,</h1>
                    <h1 className="link-text text-2xl text-emerald-400">Anks</h1>
                </div>
            </div>

            {/* Description */}
            <div className="w-full flex justify-center text-3xl text-white mt-4">
                <p>As an admin you can do wonders:</p>
            </div>

            {/* New pokemon */}
            <New_Pokemon />

            {/* Remove Pokemon */}
            <Delete_Pokemon />

            {/* Update a pokemon */}
            {/* <Update_Pokemon/> */}

            {/* Evolution Data */}
            <Evolution_Data/>

            {/*Stats*/}
            <New_Stats />
            

        </div>
    )
}
export default AdminDashboard