const User = require('./User');

const findAllUsersService = async () => await User.find();



module.exports = {
    findAllUsersService,
}
