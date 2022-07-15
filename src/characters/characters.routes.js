const express = require('express');
const router = express.Router();

const {
    findAllCharacterController,
    findByIdCharacterController,
    searchCharactersByNameController,
} = require('./characters.controller');

const { validCharacterId } = require('./characters.middleware');

const authMiddleware = require('../auth/auth.middleware');


router.get('/', authMiddleware,findAllCharacterController);
router.get('/find/:id', authMiddleware, validCharacterId, findByIdCharacterController);
router.get('/search', authMiddleware, searchCharactersByNameController);



module.exports = router;
