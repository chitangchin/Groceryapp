const express = require('express');
const ingredientRouter = express.Router();
const IngredientController = require('../controllers/ingredient.controller');
const auth = require('../middleware/auth');

ingredientRouter
    .use(auth.verifyUser)
    .route('/')
    .get(IngredientController.fetchAll); // update with proper function

module.exports = ingredientRouter;
