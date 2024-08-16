import { Route, Routes } from "react-router-dom"


import Home from "../Components/Home"
import Pokedex from "../Components/Pokedex"
import AdminPanel from "../Components/AdminPanel"
import AdminDashboard from "../Components/AdminDashboard"
import Pokemon_Details from "../Components/Pokemon_Details"
import New_Pokemon from "../Components/New_Pokemon"
import Delete_Pokemon from "../Components/Delete_Pokemon"
import Evolution_Data from "../Components/Evolution_Data"
import New_Stats from "../Components/New_Stats"

const Routing = () => {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />}/>
        <Route path="/adminlogin" element={<AdminPanel />}/>
        <Route path="/admindashboard" element={<AdminDashboard />}/>
        <Route path="/pokeinfo/:number" element={<Pokemon_Details/>} />
        <Route path="/new_pokemon" element={<New_Pokemon />} />
        <Route path="/delete_pokemon" element={<Delete_Pokemon />} />
        <Route path="/evolution_data" element={<Evolution_Data />} />
        <Route path="/stats_data" element={<New_Stats />} />
    </Routes>
  )
}


export default Routing