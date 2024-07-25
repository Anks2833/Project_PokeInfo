import { Route, Routes } from "react-router-dom"


import Home from "../Components/Home"
import Abilities from "../Components/Abilities"
import Gym_Leaders from "../Components/Gym_Leaders"
import Items from "../Components/Items"
import Locations from "../Components/Locations"
import Moves from "../Components/Moves"
import Pokedex from "../Components/Pokedex"
import AdminPanel from "../Components/AdminPanel"
import AdminDashboard from "../Components/AdminDashboard"
import Pokemon_Details from "../Components/Pokemon_Details"

const Routing = () => {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/abilities" element={<Abilities />}/>
        <Route path="/gym-leaders-elite-four" element={<Gym_Leaders/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/locations" element={<Locations />}/>
        <Route path="/moves" element={<Moves />}/>
        <Route path="/pokedex" element={<Pokedex />}/>
        <Route path="/adminlogin" element={<AdminPanel />}/>
        <Route path="/admindashboard" element={<AdminDashboard />}/>
        <Route path="/pokeinfo/:number" element={<Pokemon_Details/>} />
    </Routes>
  )
}


export default Routing