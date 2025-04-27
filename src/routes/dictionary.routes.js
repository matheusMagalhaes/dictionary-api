const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyJwtToken");

const { getWordDefinition } = require("../controllers/dictionaryController");
const { getDictionaryHistory } = require("../controllers/historyController");

router.get("/definition/:word", verifyToken, getWordDefinition);
router.get("/history", verifyToken, getDictionaryHistory);

module.exports = router;
