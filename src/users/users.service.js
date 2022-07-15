const User = require('./User');

const findAllUsersService = async () => await User.find();

const findUserByNameService = async (username) => await User.findOne({ username: username });

const findUserByEmailService = async (email) => await User.findOne({ email: email });

const createUserService = async (body) => await User.create(body);

const findUserById = async (id) => await User.findById(id);

module.exports = {
    findAllUsersService,
    findUserByNameService,
    findUserByEmailService,
    createUserService,
    findUserById
}
