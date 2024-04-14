const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/user.controller');

userRouter
    .route('/login')
    .post(UserController.login);

userRouter
    .route('/register')
    .post(UserController.register);

    //test commit
module.exports = userRouter;
