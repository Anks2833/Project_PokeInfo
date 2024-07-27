import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import { pokemonModel } from "../models/pokemon.models.js"
// import { uploadOnCloudinary } from "../utils/cloudinary.js"

const pokedexController = async (req, res) => {

    try {

        // Configuration
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const imageResult = await cloudinary.uploader.upload(req.files.image[0].path, {
            resource_type: "auto",
            folder: "uploads"
        });

        // Assuming 'gender1' and 'gender2' are also fields in your form
        const gender1Result = await cloudinary.uploader.upload(req.files.gender1[0].path, {
            resource_type: "auto",
            folder: "uploads"
        });
        const gender2Result = await cloudinary.uploader.upload(req.files.gender2[0].path, {
            resource_type: "auto",
            folder: "uploads"
        });

        // Convert number to string and pad with leading zeros
        const paddedNumber = req.body.number.toString().padStart(3, '0');

        const {
            name,
            description,
            type1,
            type2,
            ability,
            category,
            height,
            weight,
            weakness,
            evolution1,
            evolution2,
            evolution3,
        } = req.body

        const createdPokemon = await pokemonModel.create({
            number: paddedNumber,
            name,
            image: imageResult.secure_url, // Cloudinary returns the secure URL of the uploaded image
            description,
            type1,
            type2,
            ability,
            gender1: gender1Result.secure_url, // Cloudinary returns the secure URL of the uploaded image
            gender2: gender2Result.secure_url, // Cloudinary returns the secure URL of the uploaded image
            category,
            height,
            weight,
            weakness,
            evolution1,
            evolution2,
            evolution3,
        })

        res.send(createdPokemon)

         // Delete files from local storage
         fs.unlink(req.files.image[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete image file ${err}`);
            } else {
                console.log("Image file deleted successfully");
            }
        });
        fs.unlink(req.files.gender1[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete gender1 file ${err}`);
            } else {
                console.log("Gender1 file deleted successfully");
            }
        });
        fs.unlink(req.files.gender2[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete gender2 file ${err}`);
            } else {
                console.log("Gender2 file deleted successfully");
            }
        });

    } catch (error) {
        console.error(error);
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