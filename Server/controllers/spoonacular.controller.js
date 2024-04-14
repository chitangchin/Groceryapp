const { BAD_REQUEST, INTERNAL_SERVER_ERROR, FAILED_TO_RETRIEVE_RECIPES, INVALID_INGREDIENTS } = require('../constants');
require('dotenv').config();
const Joi = require('joi');
const logger = require('pino')()

class SpoonacularController {
    async getRecipes(req, res) {
        const schema = Joi.object({
            ingredients: Joi.array().required().items(Joi.string().min(2).max(20).required()),
          });
        try{
            const { ingredients } = req.body;
            const { error } = schema.validate(req.body);
            if (error) {
                return res.status(BAD_REQUEST).json(INVALID_INGREDIENTS);
            }
            const ingredientsForApi = ingredients.join(",+");
            const apiKey = process.env.SPOONACULAR_API_KEY;
            const requestRecipes = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsForApi}&apiKey=${apiKey}`;
            const requestRecipesResponse = await fetch(requestRecipes);
            if(requestRecipesResponse.ok){
                const recipes = await requestRecipesResponse.json();
                logger.info("recepies: " + recipes);
                res.status(200).json(recipes);
            } else {
                logger.error(FAILED_TO_RETRIEVE_RECIPES);
                throw new Error(FAILED_TO_RETRIEVE_RECIPES);
            }
        }
        catch(err){
            logger.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(err);
        }
        
    }

}

module.exports = new SpoonacularController()

