const express = require('express');
const ingredientRouter = express.Router();
const IngredientController = require('../controllers/ingredient.controller');

ingredientRouter.route('/').get(IngredientController.fetchAll);

module.exports = ingredientRouter;
