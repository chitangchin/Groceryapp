const express = require('express');
const ownedRouter = express.Router();
const OwnedController = require('../controllers/owned.controller');

ownedRouter
    .route('/:userId')
    .get(OwnedController.fetchAllUserIngredients)
    .post(OwnedController.addUserIngredients)
    .delete(OwnedController.deleteAllUserIngredients)
    .put(OwnedController.notSupported);

ownedRouter
    .route('/:userId/:ingredientId')
    //.get(OwnedController.fetchAllUserIngredients)
    //.delete(OwnedController.deleteAllUserIngredients)
    .put(OwnedController.notSupported)
    .post(OwnedController.notSupported);

module.exports = ownedRouter;
