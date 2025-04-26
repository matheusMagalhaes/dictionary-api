const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.query("SELECT 1", (err) =>
  console.log(err ? "❌ Database conection failed" : "✅ Database Conected!")
);
module.exports = pool;
