import { pokemonModel } from "../models/pokemon.models.js"

const pokeInfoController = async (req, res) => {

    try {
        const pokemon = await pokemonModel.findOne({ number: req.params.number });
        if (!pokemon) return res.status(404).json({ message: 'Pokémon not found' });
        res.status(200).send(pokemon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export { pokeInfoController }