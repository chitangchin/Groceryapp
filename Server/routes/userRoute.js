const express = require('express');
const { pool } = require('../db_config');
const userRouter = express.Router();
const auth = require('../middleware/auth');

userRouter
    .route('/login')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        const userInfo = [req.body.username, req.body.password];

        pool.query(
            'Select id FROM users WHERE username = $1 AND password = $2',
            userInfo
        ).then((result) => {
            try {
                const userId = result.rows[0];
                const token = auth.getToken(userId);
                res.cookie('token', token, {
                    httpOnly: true,
                });
                res.json(token);
            } catch {
                res.statusCode = 404;
                err_msg = `Unable to login`;
                return res.json(err_msg);
            }
        });
    });

module.exports = userRouter;
