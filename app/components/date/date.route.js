const express = require('express');
const router = express.Router();

const date = require('./date.controller');

router.get('/', date.renderPage);

module.exports = router;
