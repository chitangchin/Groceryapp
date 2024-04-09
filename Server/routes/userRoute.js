const express = require('express');
const bcrypt = require('bcrypt');
const logger = require('pino')()
const { pool } = require('../db_config');
const userRouter = express.Router();
const auth = require('../middleware/auth');
const { hashPassword } = require('../utils/hashPassword');

userRouter
    .route('/login')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        const {
            username,
            password, 
        } = req.body;
        pool.query(
            'Select id FROM users WHERE username = $1',
            userInfo
        ).then((result) => {
            try {
            if(result.rowCount == 0) {
                console.log(`User $(username) does not exist`);
                return res.status(404).json(`User does not exist`);
            }
            const isPasswordValid = bcrypt.compareSync(password, result.rows[0].password);
            if(!isPasswordValid){
                return res.status(401).json('Invalid credentials');
            }
            const userId = result.rows[0];
            const token = auth.getToken(userId);
            res.cookie('token', token, {
                httpOnly: true,
            });
            console.log('Successfully logged in with token: ' + token);
            res.status(200).json('Successfully logged in');
            } catch (err) {
                console.error(err);
                return res.status(500).json('Error logging in');
            }
        });
    });

module.exports = userRouter;
