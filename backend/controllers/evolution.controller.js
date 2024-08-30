import { evolutionModel } from "../models/evolution.model.js"


const createEvolutions = async (req, res) => {
    try {
        const {
            name1,
            number1,
            image1,
            type11,
            type21,
            name2,
            number2,
            image2,
            type12,
            type22,
            name3,
            number3,
            image3,
            type13,
            type23
        } = req.body;

        const paddedNumber1 = number1.toString().padStart(3, '0');
        const paddedNumber2 = number2 ? number2.toString().padStart(3, '0') : undefined;
        const paddedNumber3 = number3 ? number3.toString().padStart(3, '0') : undefined;

        const evolutionData = {
            name1,
            number1: paddedNumber1,
            image1,
            type11,
            type21,
            name2,
            number2: paddedNumber2,
            image2,
            type12,
            type22,
            name3: name3 || undefined,
            number3: paddedNumber3 || undefined,
            image3,
            type13,
            type23
        };

        // Remove undefined properties
        Object.keys(evolutionData).forEach(key => evolutionData[key] === undefined && delete evolutionData[key]);

        const createdEvolution = await evolutionModel.create(evolutionData);

        res.send(createdEvolution);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to create evolution data.' });
    }
};

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