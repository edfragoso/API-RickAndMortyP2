const Character = require('./Character');

const findAllCharacterService = async () => await Character.find().populate('user');

const findByIdCharacterService = async (id) => await Character.findById(id);

const searchCharactersByNameService = async (query) =>
  await Character.find({ name: { $regex: `${query || ''}`, $options: 'i' } });

module.exports = {
    findAllCharacterService,
    findByIdCharacterService,
    searchCharactersByNameService,
}
