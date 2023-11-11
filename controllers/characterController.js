const express = require('express');

const getAllCharacteres = (req, res, next) => {
    res.json({message: 'Get all the characteres'});
};

const getCharacterByName = (req, res, next) => {
       res.json({message: 'Get character by name'});
};

const getQuotesOfCharacter = (req, res, next) => {
    res.json({message: 'Get quotes of a character'});
};

module.exports = { getAllCharacteres, getCharacterByName, getQuotesOfCharacter };

