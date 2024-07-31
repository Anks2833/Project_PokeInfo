import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import { evolutionModel } from "../models/evolution.model.js"


const createEvolutions = async (req, res) => {

    try {

        // Configuration
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const evolution1Result = await cloudinary.uploader.upload(req.files.evolution1[0].path, {
            resource_type: "auto",
            folder: "uploads"
        });

        const evolution2Result = await cloudinary.uploader.upload(req.files.evolution2[0].path, {
            resource_type: "auto",
            folder: "uploads"
        });
        const evolution3Result = await cloudinary.uploader.upload(req.files.evolution3[0].path, {
            resource_type: "auto",
            folder: "uploads"
        });

        const {
            name1,
            number1,
            name2,
            number2,
            name3,
            number3,
            type11,
            type21,
            type12,
            type22,
            type13,
            type23,
        } = req.body

        const createdEvolution = await evolutionModel.create({
            name1,
            number1,
            image1: evolution1Result.secure_url,
            type11,
            type21,
            name2,
            number2,
            image2: evolution2Result.secure_url,
            type12,
            type22,
            name3,
            number3,
            image3: evolution3Result.secure_url,
            type13,
            type23
        })

        res.send(createdEvolution)

        // Delete files from local storage
        fs.unlink(req.files.evolution1[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete image file ${err}`);
            } else {
                console.log("Image file deleted successfully");
            }
        });

        fs.unlink(req.files.evolution2[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete image file ${err}`);
            } else {
                console.log("Image file deleted successfully");
            }
        });

        fs.unlink(req.files.evolution3[0].path, (err) => {
            if (err) {
                console.log(`Failed to delete image file ${err}`);
            } else {
                console.log("Image file deleted successfully");
            }
        });


    } catch (error) {
        console.error(error);
    }

}

const showEvolutionData = async (req, res) => {
    try {

        let foundEvolutions = await evolutionModel.find()

        if(!foundEvolutions) return res.status(404).send({ message: 'Evolutions not found for this Pokémon.' });

        res.send(foundEvolutions)

    } catch (error) {
        console.log(`Error fetching evolution data ${error}`);
    }
}


export {
    createEvolutions,
    showEvolutionData
}