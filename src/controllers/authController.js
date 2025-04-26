const jwt = require("jsonwebtoken");
const pool = require("../database/dictionary_db");

const register = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Username is required" });
  }
  
  try {   

    const result = await pool.query("INSERT INTO USERS (username) values($1)", [
      name
    ]);

    const user = result.rows[0];
    
    const token = jwt.sign({ name: user.username }, "secret_key");
    res.json({ token });

  } catch (error) {
    if (error.code === "23505") {
      res.status(400).json({ error: "User already exists" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await pool.query("SELECT * FROM USERS WHERE username = $1", [
      name,
    ]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: "No user was found" });
    }

    const token = jwt.sign({ name: user.username }, "secret_key");
    res.json({ token });

  } catch (error) {
    console.log(error)
    res.status(500).json({ erro: "Internal server error" });
  }
};

module.exports = { register, login };
