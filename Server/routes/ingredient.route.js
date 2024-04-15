const express = require('express');
const ingredientRouter = express.Router();
const IngredientController = require('../controllers/ingredient.controller');
const auth = require('../middleware/auth');

ingredientRouter.route('/').get(auth.verifyUser, IngredientController.fetchAll); // update with proper function

module.exports = ingredientRouter;
