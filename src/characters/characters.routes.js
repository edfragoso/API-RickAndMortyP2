const express = require('express');
const router = express.Router();

const {
    findAllCharacterController,
    findByIdCharacterController
} = require('./characters.controller');


router.get('/', findAllCharacterController);
router.get('/find/:id', findByIdCharacterController);



module.exports = router;
