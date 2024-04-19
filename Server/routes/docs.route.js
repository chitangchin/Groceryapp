const express = require('express');
const docsRouter = express.Router();
const DocsApiController = require('../controllers/docs.api.controller');

docsRouter.route('/api').get(DocsApiController.listAllRoutes); //Returns an array with all the possible routes

docsRouter
    .route('/api/:owned?/:user?/:api?/:ingredient?') //The ? makes the param optional. Must have at least one parameter.
    .get(DocsApiController.detailedRoute);

module.exports = docsRouter;
