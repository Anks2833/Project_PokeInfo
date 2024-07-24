import { pokemonModel } from "../models/pokemon.models.js"
import { v2 as cloudinary } from 'cloudinary';
// import { uploadOnCloudinary } from "../utils/cloudinary.js"

const pokedexController = async (req, res) => {

    try {

        // Configuration
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
            folder: "uploads"
        });

        const {
            number,
            name,
            description,
            type1,
            type2,
            abilities,
            category,
            height,
            weight,
            weakness
        } = req.body

        const createdPokemon = await pokemonModel.create({
            number,
            name,
            image: result.secure_url, // Cloudinary returns the secure URL of the uploaded image
            description,
            type1,
            type2,
            abilities,
            // gender1: req.file.buffer,
            // gender2: req.file.buffer,
            category,
            height,
            weight,
            weakness
        })

        res.send(createdPokemon)
        console.log(result);

    } catch (error) {
        console.error(error);
        res.status(500).send('Upload failed');
    }

}

const showPokedexData = async (req, res) => {
    
    try {

        let foundPokemons = await pokemonModel.find().sort({number: 1}).exec()
        res.send(foundPokemons)
    } catch (error) {

        console.log(`Error fetching sorted products ${error}`);
    }
}

const deletePokemon = async (req, res) => {

    try {

        let { number } = req.body
        let delPokemon = await pokemonModel.findOneAndDelete({ number })

        if (!delPokemon) {
            return res.status(404).send({ message: 'Pokémon not found.' });
        }

        res.send(delPokemon)

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the Pokémon.');
    }
}

// const updatePokemon = async (req, res) => {

//     let {} = req.body

// }

export { pokedexController, showPokedexData, deletePokemon }