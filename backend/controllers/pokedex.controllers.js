import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import { pokemonModel } from "../models/pokemon.models.js"

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
            gender1,
            gender2,
            region
        } = req.body

        const isGender1 = gender1 === "true";
        const isGender2 = gender2 === "true";

        const createdPokemon = await pokemonModel.create({
            number: paddedNumber,
            name,
            image: imageResult.secure_url, // Cloudinary returns the secure URL of the uploaded image
            description,
            type1,
            type2,
            ability,
            gender1: isGender1 ? "https://res.cloudinary.com/dlchhddqg/image/upload/v1722444603/uploads/sdpbceanquurdxsrv3rz.png": "Unknown",
            gender2: isGender2 ? "https://res.cloudinary.com/dlchhddqg/image/upload/v1722444604/uploads/jarx7dsv0mxyjcsf3wct.png": "Unknown", // Cloudinary returns the secure URL of the uploaded image
            category,
            height,
            weight,
            weakness,
            region
        })

        res.status(200).send(createdPokemon)

        // Delete files from local storage
        fs.unlink(req.files.image[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete image file ${err}`);
            } else {
                console.log("Image file deleted successfully");
            }
        });

    } catch (error) {
        res.status(500).send(error)
        console.error(error);
    }

}

const showPokedexData = async (req, res) => {

    try {

        let foundPokemons = await pokemonModel.find().sort({ number: 1 }).exec()
        res.send(foundPokemons)
    } catch (error) {

        console.log(`Error fetching sorted products ${error}`);
    }
}

const getPokemonImages = async (req, res) => {

    try {

        // Fetch a certain number of random documents
        const images = await pokemonModel.aggregate([
            { $sample: { size: 13 } } // Adjust the size according to how many images you need
        ]);

        // Extract image URLs from the documents
        // const imageUrls = images.map(image => image.image);

        res.send(images); // Send an array of image URLs
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }

}

const deletePokemon = async (req, res) => {

    try {

        const paddedNumber = req.body.number.toString().padStart(3, '0');
        let delPokemon = await pokemonModel.findOneAndDelete({ number: paddedNumber });

        if (!delPokemon) {
            return res.status(404).send({ message: 'Pokémon not found.' });
        }

        res.send(delPokemon)

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the Pokémon.');
    }
}

export { pokedexController, showPokedexData, getPokemonImages, deletePokemon }