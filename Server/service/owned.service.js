const { bool } = require('joi');
const {
    NO_INGREDIENTS_OWNED,
    NOT_FOUND,
    OK,
    USER_INGREDIENTS_RETURNED,
    FIND_INGREDIENT_ID_BY_USER,
} = require('../constants');

class OwnedService {
    constructor(pool, req) {
        this.pool = pool;
        this.req = req;
    }

    async fetchAllUserIngredients() {
        const results = await this.findIngredientsByUserId();
        const userIngredients = results.rows;
        const rowCount = results.rowCount;

        if (!rowCount) {
            return {
                status: NOT_FOUND,
                message: NO_INGREDIENTS_OWNED,
            };
        }

        return {
            status: OK,
            message: USER_INGREDIENTS_RETURNED,
            userIngredients,
        };
    }

    async addUserIngredients() {}

    //Helper Functions

    async findIngredientsByUserId() {
        const userId = [this.req.params.userId];
        const results = await this.pool.query(
            FIND_INGREDIENT_ID_BY_USER,
            userId
        );
        return results;
    }
}

module.exports = OwnedService;
