const {
    findAllCharacterService,
    findByIdCharacterService,
    searchCharactersByNameService,
    createCharacterService,
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

const searchCharactersByNameController = async (req, res) => {
  try {
    const query = req.query.name;

    if (!query) {
      return res.status(400).send({ message: 'Bad request' });
    }

    const chosenCharacters = await searchCharactersByNameService(query);

    if (!chosenCharacters) {
      return res.status(404).send({ message: ' File not found' });
    }

    res.send({
      characters: chosenCharacters.map((character) => ({
        id: character._id,
        name: character.name,
        imageUrl: character.imageUrl,
        user: character.user,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;

    const { id } = await createCharacterService(name, imageUrl, req.userId);

    res.status(201).send({
      message: 'created',
      character: { id, name, imageUrl },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



module.exports = {
    findAllCharacterController,
    findByIdCharacterController,
    searchCharactersByNameController,
    createCharacterController,
}
