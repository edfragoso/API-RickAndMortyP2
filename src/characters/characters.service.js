const Character = require('./Character');

const findAllCharacterService = async () => await Character.find().populate('user');

const findByIdCharacterService = async (id) => await Character.findById(id);

const searchCharactersByNameService = async (query) =>
  await Character.find({ name: { $regex: `${query || ''}`, $options: 'i' } });

const createCharacterService = async (name, imageUrl, userId) => {
  return await Character.create({ name, imageUrl, user: userId });
};

const updateCharacterService = async (id, body) => {
  return await Character.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

module.exports = {
    findAllCharacterService,
    findByIdCharacterService,
    searchCharactersByNameService,
    createCharacterService,
    updateCharacterService,
}
