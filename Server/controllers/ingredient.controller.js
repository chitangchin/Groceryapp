const { INTERNAL_SERVER_ERROR, OK, UNEXPECTED_ERROR } = require('../constants');
const { pool } = require('../db_config');
const IngredientService = require('../service/ingredient.service');
const logger = require('pino')();

class IngredientController {
    async fetchAll(req, res) {
        const ingredientService = new IngredientService(pool);
        try {
            const fetchAllResponse = await ingredientService.fetchAll();
            if (fetchAllResponse.status == 200) {
                const ingredients = fetchAllResponse.ingredients;
                res.status(OK).json(ingredients);
            } else {
                res.status(fetchAllResponse.status).json(
                    fetchAllResponse.message
                );
            }
            logger.info(fetchAllResponse.message);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }
}

module.exports = new IngredientController();
