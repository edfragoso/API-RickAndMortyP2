const express = require('express');
const router = express.Router();

const { findAllUsersController, } = require('./users.controller');

router.get('/', findAllUsersController);


module.exports = router;
