const Character = require('./Character');

const findAllCharacterService = async () => await Character.find().populate('user');




module.exports = {
    findAllCharacterService,
}
