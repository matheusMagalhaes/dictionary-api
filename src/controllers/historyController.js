const pool = require("../database/dictionary_db");

const getDictionaryHistory = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      "SELECT WORD, searched_at, user_id FROM word_history WHERE USER_ID = $1 ORDER BY searched_at DESC",
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {getDictionaryHistory};
