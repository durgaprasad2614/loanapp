const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get the token from the header

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    req.userId = decoded.userId; // Store userId in request for later use
    next();
  });
};

module.exports = authenticateToken;
