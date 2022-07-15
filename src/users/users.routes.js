const express = require('express');
const router = express.Router();

const { findAllUsersController, createUserController} = require('./users.controller');

router.get('/', findAllUsersController);
router.post('/create', createUserController);


module.exports = router;
