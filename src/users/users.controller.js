const { find } = require('./User');
const {
  findAllUsersService,
  findUserByNameService,
  findUserByEmailService,
  createUserService,
} = require('./users.service');

const { generateToken } = require('../auth/auth.service');

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

 const createUserController = async (req, res) => {
  try {
    const { name, username, email, password, photo } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).send({ message: 'Incomplete data' });
    }
    
    const usernameInDB = await findUserByNameService(username);
    if (usernameInDB) {
      return res.status(400).send({ message: 'Invalid userName' })
    }
    
    const emailInDb = await findUserByEmailService(email);
    if (emailInDb) {
      return res.status(400).send('Invalid email')
    }

    const user = await createUserService(req.body).catch((err) => console.log(err, message));
    if (!user) {
      return res.status(500).send({ message: 'Internal server error' });
    }

    const token = generateToken(user.id);

    res.status(201).send({
      user: {
        id: user.id,
        name,
        username,
        email,
        photo,
      },
      token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



module.exports = {
    findAllUsersController, createUserController
}
