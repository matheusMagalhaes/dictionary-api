const express = require('express');
const router = express.Router();

const {getWordDefinition} = require('../controllers/dictionary.controller')

router.get('/definition/:word', getWordDefinition);


module.exports = router;
