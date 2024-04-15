const format = require('pg-format');
const {
    NO_INGREDIENTS_OWNED,
    NOT_FOUND,
    OK,
    USER_INGREDIENTS_RETURNED,
    FIND_INGREDIENT_ID_BY_USER,
    ERROR_ADD_INGREDIENTS,
    INGREDIENTS_ADDED,
    NO_INGREDIENTS_DELETED,
    ALL_INGREDIENTS_DELETED,
    INSERT_INTO_USER_INGREDIENTS,
    DELETE_USER_INGREDIENTS,
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

    async addUserIngredients() {
        const results = await this.insertUserIngredients();
        const rowCount = results.rowCount;

        if (!rowCount) {
            return {
                status: NOT_FOUND,
                message: ERROR_ADD_INGREDIENTS,
            };
        }

        return {
            status: OK,
            message: rowCount + INGREDIENTS_ADDED,
        };
    }

    async deleteAllUserIngredients() {
        const results = await this.deleteUserIngredients();
        const rowCount = results.rowCount;
        console.log(results.rows);

        if (!rowCount) {
            return {
                status: NOT_FOUND,
                message: NO_INGREDIENTS_DELETED,
            };
        }

        return {
            status: OK,
            message: ALL_INGREDIENTS_DELETED,
        };
    }

    //Helper Functions

    async findIngredientsByUserId() {
        const userId = [this.req.params.userId];
        const results = await this.pool.query(
            FIND_INGREDIENT_ID_BY_USER,
            userId
        );
        return results;
    }

    async insertUserIngredients() {
        const queryParameters = [];
        const userId = this.req.params.userId;
        const ingredientIdArr = this.req.body.ingredientId;

        //Add userID and ingredientId to query parameters in correct format
        for (var i in ingredientIdArr) {
            const ingredientId = ingredientIdArr[i];
            queryParameters.push([userId, ingredientId]);
        }

        const insertQuery = format(
            INSERT_INTO_USER_INGREDIENTS,
            queryParameters
        );
        const results = await this.pool.query(insertQuery);
        return results;
    }

    async deleteUserIngredients() {
        const userId = [this.req.params.userId];
        const results = this.pool.query(DELETE_USER_INGREDIENTS, userId);
        return results;
    }
}

module.exports = OwnedService;
