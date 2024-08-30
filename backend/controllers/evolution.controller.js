import { evolutionModel } from "../models/evolution.model.js"


const createEvolutions = async (req, res) => {

    try {

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
            evolution1,
            evolution2,
            evolution3
        } = req.body

        // Create the evolution object with only the fields that have data
        const evolutionData = {
            name1,
            number1: paddedNumber1,
            image1: evolution1,
            type11,
            type21,
            name2,
            number2: paddedNumber2,
            image2: evolution2,
            type12,
            type22,
            name3: "",
            number3: "",
            image3: "",
            type13: "",
            type23: ""
        };

        // Include evolution3 data only if it is provided
        if (name3 && number3 && (type13 || type23) && evolution3) {
            evolutionData.name3 = name3;
            evolutionData.number3 = paddedNumber3;
            evolutionData.image3 = evolution3;
            evolutionData.type13 = type13;
            evolutionData.type23 = type23;
        }

        const createdEvolution = await evolutionModel.create(evolutionData);

        res.send(createdEvolution)

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