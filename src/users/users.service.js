const User = require('./User');

const findAllUsersService = async () => await User.find();

const findUserByNameService = async (username) => await User.findOne({username: username});



module.exports = {
    findAllUsersService,
    findUserByNameService
}
