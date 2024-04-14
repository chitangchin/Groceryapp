const express = require('express');
const { BAD_REQUEST, INTERNAL_SERVER_ERROR, FAILED_TO_RETRIEVE_RECIPES } = require('../constants');
const SpoonacularController = require('../controllers/spoonacular.controller');
const router = express.Router();
require('dotenv').config();
const logger = require('pino')()

router
    .route('/spoonacular/recipes')
    .post(SpoonacularController.getRecipes);

module.exports = router;
