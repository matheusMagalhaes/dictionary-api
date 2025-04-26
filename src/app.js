const express = require("express");
const app = express();

app.use(express.json());

app.use("/dictionary-api", require("./routes/api.routes"));

module.exports = app;
