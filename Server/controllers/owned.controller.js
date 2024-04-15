const { INTERNAL_SERVER_ERROR, OK, UNEXPECTED_ERROR } = require('../constants');
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
}

module.exports = new OwnedController();
