const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes/api.routes");
app.use("/dictionary-api", routes);

module.exports = app;
