const {
    FIND_ALL_INGREDIENTS,
    NOT_FOUND,
    OK,
    FAILED_TO_RETRIEVE_INGREDIENTS,
    ALL_INGREDIENTS_RETURNED,
} = require('../constants');

class IngredientService {
    constructor(pool) {
        this.pool = pool;
    }

    async fetchAll() {
        const results = await this.pool.query(FIND_ALL_INGREDIENTS);
        const ingredients = results.rows;

        if (!ingredients) {
            return {
                status: NOT_FOUND,
                message: FAILED_TO_RETRIEVE_INGREDIENTS,
            };
        }

        return { status: OK, message: ALL_INGREDIENTS_RETURNED, ingredients };
    }
}

module.exports = IngredientService;
