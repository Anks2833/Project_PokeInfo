import { abilityModel } from "../models/ability.models.js"

const pokemonAbility = async (req, res) => {

    try {
        const { ability } = req.body;

        const paddedNumber = req.body.number.toString().padStart(3, '0');
    
        let createdAbility = await abilityModel.create({
            number: paddedNumber,
            ability
        })
    
        if (!createdAbility) return res.send("Please create a new ability")
    
        res.send(createdAbility)
    } catch (error) {
        res.send("Error creating ability", error)
    }

}

const showPokemonAbility = async (_, res) => {

    try {

        let foundAbility = await abilityModel.find()

        if (!foundAbility) return res.send({ message: 'Ability not found for this Pokémon.' });

        res.send(foundAbility)

    } catch (error) {
        console.log(`Error fetching ability data ${error}`);
    }

}

export {
    pokemonAbility,
    showPokemonAbility
}