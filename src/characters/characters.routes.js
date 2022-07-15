const express = require('express');
const router = express.Router();

const {
    findAllCharacterController,
    findByIdCharacterController,
    searchCharactersByNameController,
    createCharacterController,
} = require('./characters.controller');

const { validCharacterId, validCharacterBody } = require('./characters.middleware');

const authMiddleware = require('../auth/auth.middleware');


router.get('/', authMiddleware,findAllCharacterController);
router.get('/find/:id', authMiddleware, validCharacterId, findByIdCharacterController);
router.get('/search', authMiddleware, searchCharactersByNameController);
router.post('/create', authMiddleware, validCharacterBody, createCharacterController);



module.exports = router;
