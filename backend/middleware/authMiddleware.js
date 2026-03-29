const jwt = require('jsonwebtoken');
const SECRET = "mysecret";
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(403);
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.sendStatus(401);
  }
};