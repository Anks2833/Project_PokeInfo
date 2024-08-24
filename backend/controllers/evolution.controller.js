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

        console.log(req.files);

        let evolution1Result, evolution2Result, evolution3Result;

        // Upload evolution1 image if provided
        if (req.files.evolution1 && req.files.evolution1[0]) {
            evolution1Result = await cloudinary.uploader.upload(req.files.evolution1[0].path, {
                resource_type: "auto",
                folder: "uploads"
            });
        }

        // Upload evolution2 image if provided
        if (req.files.evolution2 && req.files.evolution2[0]) {
            evolution2Result = await cloudinary.uploader.upload(req.files.evolution2[0].path, {
                resource_type: "auto",
                folder: "uploads"
            });
        }

        // Upload evolution3 image if provided
        if (req.files.evolution3 && req.files.evolution3[0]) {
            evolution3Result = await cloudinary.uploader.upload(req.files.evolution3[0].path, {
                resource_type: "auto",
                folder: "uploads"
            });
        }

        const paddedNumber1 = req.body.number1.toString().padStart(3, '0');
        const paddedNumber2 = req.body.number2.toString().padStart(3, '0');
        const paddedNumber3 = req.body.number3.toString().padStart(3, '0');

        const {
            name1,
            name2,
            name3,
            type11,
            type21,
            type12,
            type22,
            type13,
            type23,
        } = req.body

        // Create the evolution object with only the fields that have data
        const evolutionData = {
            name1,
            number1: paddedNumber1,
            image1: evolution1Result ? evolution1Result.secure_url : null,
            type11,
            type21,
            name2,
            number2: paddedNumber2,
            image2: evolution2Result ? evolution2Result.secure_url : null,
            type12,
            type22
        };

        // Include evolution3 data only if it is provided
        if (name3 && number3 && (type13 || type23) && evolution3Result) {
            evolutionData.name3 = name3;
            evolutionData.number3 = paddedNumber3;
            evolutionData.image3 = evolution3Result.secure_url;
            evolutionData.type13 = type13;
            evolutionData.type23 = type23;
        }

        const createdEvolution = await evolutionModel.create(evolutionData);

        res.send(createdEvolution)

        // Delete files from local storage
        if (req.files.evolution1 && req.files.evolution1[0]) {
            fs.unlink(req.files.evolution1[0].path, (err) => {
                if (err) {
                    console.log(`Failed to delete image file ${err}`);
                } else {
                    console.log("Image file deleted successfully");
                }
            });
        }


        if (req.files.evolution2 && req.files.evolution2[0]) {
            fs.unlink(req.files.evolution2[0].path, (err) => {
                if (err) {
                    console.log(`Failed to delete image file ${err}`);
                } else {
                    console.log("Image file deleted successfully");
                }
            });
        }
        

        if (req.files.evolution3 && req.files.evolution3[0]) {
            fs.unlink(req.files.evolution3[0].path, (err) => {
                if (err) {
                    console.log(`Failed to delete image file ${err}`);
                } else {
                    console.log("Image file deleted successfully");
                }
            });
        }
        


    } catch (error) {
        console.error(error);
    }

}

const showEvolutionData = async (_, res) => {
    try {

        let foundEvolutions = await evolutionModel.find()

        if (!foundEvolutions) return res.status(404).send({ message: 'Evolutions not found for this Pokémon.' });

        res.send(foundEvolutions)

    } catch (error) {
        console.log(`Error fetching evolution data ${error}`);
    }
}


export {
    createEvolutions,
    showEvolutionData
}