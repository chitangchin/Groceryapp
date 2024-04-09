const express = require('express');
const bcrypt = require('bcrypt');
const { pool } = require('../db_config');
const userRouter = express.Router();
const auth = require('../middleware/auth');
const { hashPassword } = require('../utils/hashPassword');

/**
 * Handle POST request to login endpoint
 * @param {object} req - The request object containing username and password
 * @param {string} res - The response object with status code and message
 */
userRouter
    .route('/login')
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        const {
            username,
            password, 
        } = req.body;
        pool.query(
            'Select * FROM users WHERE username = $1',
            [username]
        ).then((result) => {
            try {
            if(result.rowCount == 0) {
                return res.status(404).json(`User does not exist`);
            }
            const isPasswordValid = bcrypt.compareSync(password, result.rows[0].password);
            if(!isPasswordValid){
                return res.status(401).json('Invalid credentials');
            }
            //TODO: do we really need to check if password is a number && exist??
            if(!result.rows[0].id || typeof +result.rows[0].id !== 'number') {
                return res.status(500).json('Error logging in');
            } 
            const userId = result.rows[0].id;
            const token = auth.getToken(userId);
            res.cookie('token', token, {
                httpOnly: true,
            });
            res.status(200).json('Successfully logged in');
            } catch (err) {
                console.error(err);
                return res.status(500).json('Error logging in');
            }
        });
    });

/**
 * Handle POST request to register endpoint
 * @param {object} req - The request object containing username and password
 * @param {string} res - The response object with status code and message
 * 
 */

userRouter
    .route('/register')
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        //TODO: check if username exists and valid
        const {username} = req.body;
        //TODO: check if password exists and valid
        const hashedPassword = hashPassword(req.body.password);
        //TODO: check if username exists and send error back to client
        pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
            [username, hashedPassword]
        ).then((result) => {
            try {
                const userId = result.rows[0].id;
                const token = auth.getToken(userId);
                res.cookie('token', token, {
                    httpOnly: true,
                });
                res.end('Registration Successful!');
            } catch (err) {
                console.error('Error during registration:', err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        });
    });

module.exports = userRouter;
