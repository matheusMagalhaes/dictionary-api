const pool = require("../database/dictionary_db");

async function saveSearch(word, userID) {
  await pool.query(
    "INSERT INTO WORD_HISTORY (word,searchedAt, user_id) VALUES ($1, NOW(), $2)",
    [word, userID]
  );
}

module.exports  = {saveSearch};