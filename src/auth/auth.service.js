const User = require('../users/Users');
const jwt = require('jsonwebtoken');

const loginService = async (email) => await User.findOne({ email: email }).select('+password');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });
};

module.exports = { loginService, generateToken };
