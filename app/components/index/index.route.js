const express = require('express');
const router = express.Router();

const home = require('./index.controller');

router.get('/', home.homePage);

module.exports = router;
