const jwt = require('jsonwebtoken');
const { findUserById } = require('../users/users.service');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Token not provided' });
  }

  const headerParts = authHeader.split(' ');

  if (headerParts.length !== 2) {
    return res.status(401).send({ message: 'Invalid token' });
  }

  const [scheme, token] = headerParts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'badly formatted token' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'invalid token' });
    }

    const user = await findUserById(decoded.id);

    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }

    req.userId = user.id;

    return next();
  });
};
