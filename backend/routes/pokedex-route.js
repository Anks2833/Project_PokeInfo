import express from "express";

import { upload } from "../middlewares/multer.middleware.js";

import {
    pokedexController,
    showPokedexData,
    getPokemonImages,
    deletePokemon,
} from "../controllers/pokedex.controllers.js";

import {
    pokeInfoController
} from "../controllers/pokeinfo.controller.js"

import {
    createEvolutions,
    showEvolutionData
} from "../controllers/evolution.controller.js"

import {
    createStats,
    findStats
} from "../controllers/stats.controller.js"

const router = express.Router();

router.post("/pokedex", upload.fields([{name: "image"}, {name: "gender1"}, {name: "gender2"}]),  pokedexController)
router.post("/evolution", upload.fields([{name: "evolution1"}, {name: "evolution2"}, {name: "evolution3"}]), createEvolutions)
router.post("/stats",upload.none(), createStats)

router.get("/pokedex", showPokedexData)
router.get("/pokeinfo/:number", pokeInfoController)
router.get("/pokedex/randomimage", getPokemonImages)
router.get("/evolution", showEvolutionData)
router.get("/stats", findStats)


// router.put("/pokedex", updatePokemon)

router.delete("/pokedex", deletePokemon)




export default router 