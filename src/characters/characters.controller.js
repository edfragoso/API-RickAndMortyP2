const {
    findAllCharacterService,
    findByIdCharacterService,
} = require('./characters.service');


const findAllCharacterController = async (req, res) => {
    try {
        const allCharacters = await findAllCharacterService();

        if (!allCharacters) {
            return res.status(404).send({message: 'File not Found'});
        }
        
        /* res.send(allCharacters) */
        res.send({
            results: allCharacters.map((character) => ({
            id: character._id,
            name: character.name,
            imageUrl: character.imageUrl,
            user: character.user,
        })),
        });
    } catch (err) {
        res.status(500).send({ message: err.message});
    }
};

const findByIdCharacterController = async (req, res) => {
    try {
        const idParam = req.params.id;
        const chosenCharacter = await findByIdCharacterService(idParam);
        if (!chosenCharacter) {
            return res.status(404).send({ messsage: 'Not Found' })
        }
        res.send(chosenCharacter);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};



module.exports = {
    findAllCharacterController,
    findByIdCharacterController,
}
