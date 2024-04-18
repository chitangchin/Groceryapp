const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/user.controller');

userRouter
    .route('/login')
    .post(UserController.login);

userRouter
    .route('/logout')
    .get(UserController.logout);
    
userRouter
    .route('/register')
    .post(UserController.register);

module.exports = userRouter;
