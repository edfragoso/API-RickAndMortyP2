const express = require('express');
const router = express.Router();

const {
    findAllCharacterController,
} = require('./characters.controller');


router.get('/', findAllCharacterController);



module.exports = router;
