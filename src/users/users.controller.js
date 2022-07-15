const {
    findAllUsersService,
} = require('./users.service');

const findAllUsersController = async (req, res) => {
  try {
    const allUsers = await findAllUsersService();

    if (allUsers.length === 0) {
      return res.status(404).send({ message: 'no users in DB' });
    }

    res.send(allUsers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



module.exports = {
    findAllUsersController,
}
