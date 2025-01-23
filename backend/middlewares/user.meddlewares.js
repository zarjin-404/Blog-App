import jwt from 'jsonwebtoken';

const userMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Token not provided, Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res
        .status(401)
        .json({ message: 'Token expired, please log in again' });
    }
    console.error('JWT verification error:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default userMiddleware;
