const { bool } = require('joi');
const {
    FIND_ALL_INGREDIENTS,
    NOT_FOUND,
    OK,
    FAILED_TO_RETRIEVE_INGREDIENTS,
    ALL_INGREDIENTS_RETURNED,
} = require('../constants');

class OwnedService {
    constructor(pool, req) {
        this.pool = pool;
        this.req = req;
    }

    async fetchAllUserIngredients() {
        const results = await this.pool.query(
            'SELECT ingredient_id FROM ingredients_owned WHERE user_id = $1;',
            [this.req.params.userId]
        );
        const userIngredients = results.rows;
        const rowCount = results.rowCount;

        if (!rowCount) {
            return {
                status: NOT_FOUND,
                message: 'User has no ingredients',
            };
        }

        return {
            status: OK,
            message: 'All user ingredients returned',
            userIngredients,
        };
    }
}

module.exports = OwnedService;
