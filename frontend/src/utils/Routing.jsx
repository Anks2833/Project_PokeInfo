import { Route, Routes } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import ScrollToTop from "./scrollToTop"

import Home from "../Components/Home"
import Pokedex from "../Components/Pokedex"
import AdminPanel from "../Components/AdminPanel"
import AdminDashboard from "../Components/AdminDashboard"
import Pokemon_Details from "../Components/Pokemon_Details"
import New_Pokemon from "../Components/New_Pokemon"
import Delete_Pokemon from "../Components/Delete_Pokemon"
import Evolution_Data from "../Components/Evolution_Data"
import New_Stats from "../Components/New_Stats"
import New_Ability from "../Components/New_Ability"
import Not_Found from "../Components/Not_Found"

const Routing = () => {
  return (

    <>

      <ScrollToTop />

      <Routes>
      {/* Catch-all route */}
      <Route path="*" element={<Not_Found />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/adminlogin" element={<AdminPanel />} />
        <Route path="/pokeinfo/:number" element={<Pokemon_Details />} />

        <Route path="/admindashboard" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />

        <Route path="/new_pokemon" element={
          <PrivateRoute>
            <New_Pokemon />
          </PrivateRoute>
        } />

        <Route path="/delete_pokemon" element={
          <PrivateRoute>
            <Delete_Pokemon />
          </PrivateRoute>
        } />

        <Route path="/evolution_data" element={
          <PrivateRoute>
            <Evolution_Data />
          </PrivateRoute>
        } />

        <Route path="/stats_data" element={
          <PrivateRoute>
            <New_Stats />
          </PrivateRoute>
        } />

        <Route path="/ability_data" element={
          <PrivateRoute>
            <New_Ability />
          </PrivateRoute>
        } />

      </Routes>
    </>


  )
}


export default Routing