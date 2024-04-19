const routeInfo = require('../api-routes.json');
const {
    OK,
    ALL_API_ROUTES,
    INTERNAL_SERVER_ERROR,
    UNEXPECTED_ERROR,
} = require('../constants');

class DocsApiController {
    async listAllRoutes(req, res) {
        try {
            res.status(OK).json(ALL_API_ROUTES);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }

    async detailedRoute(req, res) {
        try {
            const parameters = req.params;
            const results = [];

            for (let param in parameters) {
                const key = parameters[param];
                const value = routeInfo[key];

                if (value && !results.includes(value)) {
                    // Checks if value is truthy (not undefined in this case) and if the results array doesn't already contain value
                    results.push(value);
                }
            }

            res.status(OK).json(results);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }
}

module.exports = new DocsApiController();
