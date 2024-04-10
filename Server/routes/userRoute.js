const express = require('express');
const bcrypt = require('bcrypt');
const { pool } = require('../db_config');
const userRouter = express.Router();
const auth = require('../middleware/auth');
const { hashPassword } = require('../utils/hashPassword');
const { USERNAME_REGEX, BAD_REQUEST, BAD_PASSWORD, BAD_USERNAME, FIND_ALL_USERS_BY_USERNAME, USERNAME_ALREADY_EXISTS, PASSWORD_REGEX, INSERT_INTO_USERS_USERNAME_AND_PASSWORD, CONFLICT, INTERNAL_SERVER_ERROR, UNEXPECTED_ERROR, REGISTRATION_SUCCESSFUL, TOKEN, USER_DOESNT_EXIST, NOT_FOUND, UNAUTHORIZED, INVALID_CREDENTIALS, NUMBER, ERROR_LOGGING_IN, CONTENT_TYPE, TEXT_PLAIN, SUCCESSFULLY_LOGGED_IN } = require('../constants');

/**
 * Handle POST request to login endpoint
 * @param {object} req - The request object containing username and password
 * @param {string} res - The response object with status code and message
 */
userRouter
    .route('/login')
    .all((req, res, next) => {
        res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
        next();
    })
    .post((req, res, next) => {
        const {
            username,
            password, 
        } = req.body;
        pool.query(
            FIND_ALL_USERS_BY_USERNAME,
            [username]
        ).then((result) => {
            try {
            if(result.rowCount == 0) {
                return res.status(NOT_FOUND).json(USER_DOESNT_EXIST);
            }
            const isPasswordValid = bcrypt.compareSync(password, result.rows[0].password);
            if(!isPasswordValid){
                return res.status(UNAUTHORIZED).json(INVALID_CREDENTIALS);
            }
            //! Do we have to keep below validation that I have made or it can be removed?
            if(!result.rows[0].id || typeof +result.rows[0].id !== NUMBER) {
                return res.status(INTERNAL_SERVER_ERROR).json(ERROR_LOGGING_IN);
            } 
            const userId = result.rows[0].id;
            const token = auth.getToken(userId);
            res.cookie(TOKEN, token, {
                httpOnly: true,
            });
            res.json(SUCCESSFULLY_LOGGED_IN);
            } catch (err) {
                console.error(err);
                return res.status(INTERNAL_SERVER_ERROR).json(ERROR_LOGGING_IN);
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
    .post(async (req, res, next) => {
        const {username} = req.body;
        const isValidUsername = USERNAME_REGEX;
        if (!isValidUsername.test(username)) {
            return res.status(BAD_REQUEST).json(BAD_USERNAME);
        }
        const isValidPassword = PASSWORD_REGEX;
        if (!isValidPassword.test(req.body.password)) {
            return res.status(BAD_REQUEST).json(BAD_PASSWORD);
        }
        const hashedPassword = hashPassword(req.body.password);
        const result = await pool.query(
            FIND_ALL_USERS_BY_USERNAME,
            [username]
        )
        if(result.rowCount > 0) {
            return res.status(CONFLICT).json(USERNAME_ALREADY_EXISTS);
        }    
        pool.query(
            INSERT_INTO_USERS_USERNAME_AND_PASSWORD,
            [username, hashedPassword]
        ).then((result) => {
            try {
                const userId = result.rows[0].id;
                const token = auth.getToken(userId);
                res.cookie(TOKEN, token, {
                    httpOnly: true,
                });
                res.end(REGISTRATION_SUCCESSFUL);
            } catch (err) {
                console.error('Error during registration:', err);
                res.statusCode = INTERNAL_SERVER_ERROR;
                res.end(UNEXPECTED_ERROR);
            }
        });
    });

module.exports = userRouter;
