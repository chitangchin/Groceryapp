const express = require('express');
const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../constants');
const router = express.Router();
require('dotenv').config();
const logger = require('pino')()

router
    .route('/spoonacular/recipies')
    .post(async (req, res) => {
        try{
            const { ingredients } = req.body;
            if (!ingredients || ingredients.length === 0) {
                return res.status(BAD_REQUEST).json(MISSING_INGREDIENTS);
            }
            const ingredientsForApi = ingredients.join(",+");
            const apiKey = process.env.SPOONACULAR_API_KEY;
            const requestRecepies = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsForApi}&apiKey=${apiKey}`;
            const requestRecepiesResponse = await fetch(requestRecepies);
            if(requestRecepiesResponse.ok){
                const recepies = await requestRecepiesResponse.json();
                logger.info("recepies: " + recepies);
                res.status(200).json(recepies);
            } else {
                console.error(FAILED_TO_RETRIEVE_RECIPES);
                throw new Error(FAILED_TO_RETRIEVE_RECIPES);
            }
        }
        catch(err){
            logger.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(FAILED_TO_RETRIEVE_RECIPES);
        }
    });



module.exports = router;
