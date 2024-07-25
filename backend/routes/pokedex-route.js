import express from "express";

import { upload } from "../middlewares/multer.middleware.js";

import {
    pokedexController,
    showPokedexData,
    deletePokemon,
} from "../controllers/pokedex.controllers.js";
import {
    pokeInfoController
} from "../controllers/pokeinfo.controller.js"

const router = express.Router();

router.post("/pokedex", upload.fields([{name: "image"}, {name: "gender1"}, {name: "gender2"}]),  pokedexController)
router.get("/pokedex", showPokedexData)
router.delete("/pokedex", deletePokemon)
// router.put("/pokedex", updatePokemon)


router.get("/pokeinfo/:number", pokeInfoController)


export default router 