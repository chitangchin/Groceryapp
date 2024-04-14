const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.getToken = (userId) => {
    const payload = {
        userId
    }
    return jwt.sign(payload, process.env.secretKey, { expiresIn: '30m' });
};

exports.verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.secretKey);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie('token');
        res.end('Unable to access route');
    }
};
