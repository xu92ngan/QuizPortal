const jwt = require('jsonwebtoken');
const JWT_SECRET = 'quizportal';

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decodedToken = jwt.verify(token, JWT_SECRET);
      const userId = decodedToken.id;

      // Get userId from the token
      req.body.userId = userId;

      next();
    } catch (error) {
      res.status(401).send({
        message: 'Not authorized',
        data: error,
        success: false,
      });
    }
  }
};

module.exports = { protect };
