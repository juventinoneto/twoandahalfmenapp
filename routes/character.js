const express = require('express');
const characterController = require('../controllers/characterController');
var router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('It will return a list with all the characteres');
    characterController.getAllCharacteres(req, res, next)
});

router.get('/:name', (req, res, next) => {
    // res.send('It will return the character by the name');
    characterController.getCharacterByName(req, res, next);
});

router.get('/:name/quote', (req, res, next) => {
    // res.send('It will return something said by this character');
    characterController.getQuotesOfCharacter(req, res, next);
});



module.exports = router;
