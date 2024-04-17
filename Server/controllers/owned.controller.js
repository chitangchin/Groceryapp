const {
    INTERNAL_SERVER_ERROR,
    OK,
    UNEXPECTED_ERROR,
    NOT_IMPLEMENTED,
    OPERATION_NOT_SUPPORTED,
} = require('../constants');
const { pool } = require('../db_config');
const OwnedService = require('../service/owned.service');
const logger = require('pino')();

class OwnedController {
    async fetchAllUserIngredients(req, res) {
        const ownedService = new OwnedService(pool, req);
        try {
            const fetchAllIngredientsResponse =
                await ownedService.fetchAllUserIngredients();
            if (fetchAllIngredientsResponse.status == 200) {
                const userIngredients =
                    fetchAllIngredientsResponse.userIngredients;
                res.status(OK).json(userIngredients);
            } else {
                res.status(fetchAllIngredientsResponse.status).json(
                    fetchAllIngredientsResponse.message
                );
            }
            logger.info(fetchAllIngredientsResponse.message);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }

    async addUserIngredients(req, res) {
        const ownedService = new OwnedService(pool, req);
        try {
            const addUserIngredientsResponse =
                await ownedService.addUserIngredients();

            res.status(addUserIngredientsResponse.status).json(
                addUserIngredientsResponse.message
            );
            logger.info(addUserIngredientsResponse.message);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }

    async deleteAllUserIngredients(req, res) {
        const ownedService = new OwnedService(pool, req);
        try {
            const deleteAllResponse =
                await ownedService.deleteAllUserIngredients();

            res.status(deleteAllResponse.status).json(
                deleteAllResponse.message
            );
            logger.info(deleteAllResponse.message);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }

    async fetchUserIngredient(req, res) {
        const ownedService = new OwnedService(pool, req);
        try {
            const fetchIngredientResponse =
                await ownedService.fetchUserIngredient();
            if (fetchIngredientResponse.status == 200) {
                const userIngredient = fetchIngredientResponse.userIngredient;
                res.status(OK).json(userIngredient);
            } else {
                res.status(fetchIngredientResponse.status).json(
                    fetchIngredientResponse.message
                );
            }
            logger.info(fetchIngredientResponse.message);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }

    async deleteUserIngredient(req, res) {
        const ownedService = new OwnedService(pool, req);
        try {
            const deleteIngredientResponse =
                await ownedService.deleteUserIngredient();

            res.status(deleteIngredientResponse.status).json(
                deleteIngredientResponse.message
            );
            logger.info(deleteIngredientResponse.message);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }

    async notSupported(req, res) {
        try {
            res.status(NOT_IMPLEMENTED).json(OPERATION_NOT_SUPPORTED);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }
}

module.exports = new OwnedController();
