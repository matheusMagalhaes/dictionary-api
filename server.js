const app = require("./src/app");
const port = process.env.port || 3000;
const pool = require('./src/database/dictionary_db');


app.listen(port, () => {
  console.log(`Dictionary API online :) \nlistening on ${port}`);
});
pool.query("SELECT 1", (err) =>
  console.log(err ? "❌ Database conection failed" : "✅ Database Conected!")
);