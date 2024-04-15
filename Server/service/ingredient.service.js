const { FIND_ALL_INGREDIENTS, NOT_FOUND, OK } = require('../constants');

class IngredientService {
    constructor(pool, auth) {
        this.pool = pool;
        this.auth = auth;
    }

    async fetchAll() {
        const results = await this.pool.query(FIND_ALL_INGREDIENTS);
        const ingredients = results.rows;

        if (!ingredients) {
            return { status: NOT_FOUND, message: 'No ingredients' };
        }

        return { status: OK, message: 'All ingredients returned', ingredients };
    }
}

module.exports = IngredientService;
