import { statsModel } from "../models/stats.model.js"

const createStats = async (req, res) => {

    try {
        const {
            hp,
            attack,
            defense,
            specialattack,
            specialdefense,
            speed,
        } = req.body;

        const createdStats = await statsModel.create({
            number: req.body.number,
            hp,
            attack,
            defense,
            specialattack,
            specialdefense,
            speed,
        });

        res.send(createdStats);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'An error occurred' });
    }
};

const findStats = async (req, res) => {
    try {
        const foundStats = await statsModel.find();

        if (!foundStats) {
            return res.status(404).send({ message: 'Stats not found for this Pokémon.' });
        }

        res.send(foundStats);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'An error occurred' });
    }
};

export {
    createStats,
    findStats
}