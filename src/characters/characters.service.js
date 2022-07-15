const Character = require('./Character');

const findAllCharacterService = async () => await Character.find().populate('user');

const findByIdCharacterService = async (id) => await Character.findById(id);


module.exports = {
    findAllCharacterService,
    findByIdCharacterService,
}
