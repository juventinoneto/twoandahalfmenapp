const express = require("express");
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('App up and running...');
});

module.exports = router;
