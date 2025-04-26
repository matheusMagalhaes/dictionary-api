const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/dictionary", require("./dictionary.routes"));

module.exports = router;
