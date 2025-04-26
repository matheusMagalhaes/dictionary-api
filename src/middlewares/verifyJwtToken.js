const jwt  =  require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsIm5hbWUiOiJ0aWEiLCJpYXQiOjE3NDU2NTAyMTd9.XJrBAiD_1Ip51STK3NSIgpoqQMXI0rN0o0iGE0wRh-I");
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    res.status(403).json({ message: "Invalid Token" });
  }
};
module.exports = verifyToken;
