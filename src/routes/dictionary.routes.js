const express = require('express');
const router = express.Router();
const verifyToken = require("../middlewares/verifyJwtToken");

const {getWordDefinition} = require('../controllers/dictionary.controller')

router.get('/definition/:word', verifyToken,getWordDefinition);

module.exports = router;
