const jwt = require('jsonwebtoken');
const { UNAUTHORIZED, INVALID_CREDENTIALS } = require('../constants');
require('dotenv').config();

exports.getToken = (userId) => {
    const payload = {
        userId,
    };
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

exports.verifyRequester = (req, res, next) => {
    try {
        if (req.params.userId !== req.user.userId) {
            throw new Error(INVALID_CREDENTIALS);
        }
        next();
    } catch (err) {
        console.error(err);
        res.status(UNAUTHORIZED).json(INVALID_CREDENTIALS);
    }
};
