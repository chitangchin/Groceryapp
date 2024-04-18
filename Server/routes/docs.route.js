const express = require('express');
const docsRouter = express.Router();
const DocsController = require('../controllers/docs.controller');

docsRouter.route('/api').get(DocsController.listAllRoutes);

module.exports = docsRouter;
