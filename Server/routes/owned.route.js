const express = require('express');
const ownedRouter = express.Router();
const OwnedController = require('../controllers/owned.controller');
const { verifyRequester } = require('../middleware/auth');

ownedRouter
    .route('/:userId')
    .all(verifyRequester)
    .get(OwnedController.fetchAllUserIngredients)
    .post(OwnedController.addUserIngredients)
    .delete(OwnedController.deleteAllUserIngredients)
    .put(OwnedController.notSupported);

ownedRouter
    .route('/:userId/:ingredientId')
    .all(verifyRequester)
    .get(OwnedController.fetchUserIngredient)
    .delete(OwnedController.deleteUserIngredient)
    .put(OwnedController.notSupported)
    .post(OwnedController.notSupported);

module.exports = ownedRouter;
