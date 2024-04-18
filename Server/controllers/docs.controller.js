const {
    OK,
    ALL_API_ROUTES,
    INTERNAL_SERVER_ERROR,
    UNEXPECTED_ERROR,
} = require('../constants');

class DocsController {
    async listAllRoutes(req, res) {
        try {
            res.status(OK).json(ALL_API_ROUTES);
        } catch (err) {
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR).json(UNEXPECTED_ERROR);
        }
    }
}

module.exports = new DocsController();
