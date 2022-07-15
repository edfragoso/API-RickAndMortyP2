const User = require('./User');

const findAllUsersService = async () => await User.find();

const findUserByNameService = async (username) => await User.findOne({ username: username });

const findUserByEmailService = async (email) => await User.findOne({ email: email });


module.exports = {
    findAllUsersService,
    findUserByNameService,
    findUserByEmailService,
}
