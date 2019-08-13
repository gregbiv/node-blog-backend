const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (token === null) {
            return res.status(401).json({
                message: 'Authentication failed, Access token is required!!',
                title: 'Token Not Found'
            });
        }
        jwt.verify(token, jwtSecret,  function(err, decoded) {
            if (err) {
                if(err.name === 'JsonWebTokenError') {
                    return res.status(401).json({
                        title: 'Invalid Token',
                        message: 'Authentication failed, invalid token provided.',
                    })
                } else if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({
                        title: 'Token Expired',
                        message: 'Your access token is expired, please login.',
                    })
                }
            } else {
                req.userData = decoded;
                next();
            }
        });
    } catch (error) {
        return res.status(401).json({
            title: 'Unauthorized',
            message: 'Authentication failed!!'
        });
    }
};
