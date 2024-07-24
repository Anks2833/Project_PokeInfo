import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
    pokedexController,
    showPokedexData,
    deletePokemon,
} from "../controllers/pokedex.controllers.js";
const router = express.Router();

router.post("/pokedex", upload.single("image"),  pokedexController)
router.get("/pokedex", showPokedexData)
router.delete("/pokedex", deletePokemon)
// router.put("/pokedex", updatePokemon)


export default router 