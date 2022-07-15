const express = require('express');
const router = express.Router();
const authMiddleware = require('../auth/auth.middleware');
const { findAllUsersController, createUserController} = require('./users.controller');

router.get('/', authMiddleware, findAllUsersController);
router.post('/create', createUserController);


module.exports = router;
