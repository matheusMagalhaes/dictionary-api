const jwt = require("jsonwebtoken");
const pool = require("../database/dictionary_db");

const register = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Username is required" });
  }
  
  try {   

    const result = await pool.query("INSERT INTO USERS (username) values($1) RETURNING *", [
      name
    ]);

    const user = result.rows[0];
    
    const token = jwt.sign({ id:user.id , name: user.username}, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsIm5hbWUiOiJ0aWEiLCJpYXQiOjE3NDU2NTAyMTd9.XJrBAiD_1Ip51STK3NSIgpoqQMXI0rN0o0iGE0wRh-I");
    res.json({ token });

  } catch (error) {
    console.log(error)
    if (error.code === "23505") {
      res.status(400).json({ error: "User already exists" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { register };
