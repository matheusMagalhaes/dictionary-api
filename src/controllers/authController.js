const jwt = require("jsonwebtoken");
const pool = require("../database/dictionary_db");
require("dotenv").config();


const register = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "User name is required" });
  }
  
  try {   

    const result = await pool.query("INSERT INTO USERS (name) values($1) RETURNING *", [
      name
    ]);

    const user = result.rows[0];
    
    const token = jwt.sign({ id:user.id , name: user.name}, process.env.SECRET_KEY);
    res.status(200).json({ token });

  } catch (error) {
    console.error(error)
    if (error.code === "23505") {
      res.status(400).json({ error: "User already exists" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { register };
