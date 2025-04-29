const jwt = require('jsonwebtoken');
const { secret } = require('../../Config/jwt');

module.exports = function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // 'Bearer <token>'

  if (!token) return res.status(401).
  json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified; 
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid Token' });
  }
};
