const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};


// NOT IN USE OPTIONAL 

                            //Use this middleware in your routes://


                // const authMiddleware = require('../middleware/auth');

                // // Protect event routes
                // router.post('/', authMiddleware, async (req, res) => {
                //   // Your code here
                // });
