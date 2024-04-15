const { INTERNAL_SERVER_ERROR, OK, UNEXPECTED_ERROR } = require('../constants');
const { pool } = require('../db_config');
const auth = require('../middleware/auth');
const IngredientService = require('../service/ingredient.service');

class IngredientController {
    async fetchAll(req, res) {
        const ingredientService = new IngredientService(pool, auth);
        try {
            const fetchAllResponse = await ingredientService.fetchAll();
            if (fetchAllResponse.status == 200) {
                const ingredients = fetchAllResponse.ingredients;
                res.status(OK).json(ingredients);
            } else {
                throw new Error('Failed to retrieve ingredients');
            }
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }
}

module.exports = new IngredientController();
