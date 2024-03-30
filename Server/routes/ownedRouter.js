const express = require('express');
const { pool } = require('../db_config');
const format = require('pg-format');
const ownedRouter = express.Router();

ownedRouter
    .route('/:userId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        pool.query(
            'SELECT ingredient_id FROM ingredients_owned WHERE user_id = $1;',
            [req.params.userId]
        )
            .then((result) => {
                if (result.rowCount) {
                    res.json(result.rows);
                } else {
                    res.statusCode = 404;
                    err_msg = `User ${req.params.userId} owns no ingredients or does not exist.`;
                    return res.json(err_msg);
                }
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        queryParameters = [];

        for (index in req.body.ingredientId) {
            queryParameters.push([
                req.params.userId,
                req.body.ingredientId[index],
            ]);
        }

        insertQuery = format(
            'INSERT INTO ingredients_owned (user_id, ingredient_id) VALUES %L',
            queryParameters
        );
        pool.query(insertQuery)
            .then(() =>
                res.end(`Added ingredient ${req.body.ingredientId} to list`)
            )
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on this route');
    })
    .delete((req, res, next) => {
        pool.query('DELETE FROM ingredients_owned WHERE user_id = $1;', [
            req.params.userId,
        ])
            .then(() => res.end('All ingredients deleted from list.'))
            .catch((err) => next(err));
    });

ownedRouter
    .route('/:userId/:ingredientId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        pool.query(
            'SELECT ingredient_id FROM ingredients_owned WHERE user_id = $1 AND ingredient_id = $2',
            [req.params.userId, req.params.ingredientId]
        )
            .then((result) => {
                if (result.rowCount) {
                    res.json(result.rows);
                } else {
                    res.statusCode = 404;
                    err_msg = `User ${req.params.userId} does not have ingredient ${req.params.ingredientId}.`;
                    return res.json(err_msg);
                }
            })
            .catch((err) => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on this route');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on this route');
    })
    .delete((req, res, next) => {
        pool.query(
            'DELETE FROM ingredients_owned WHERE user_id = $1 AND ingredient_id = $2',
            [req.params.userId, req.params.ingredientId]
        )
            .then(() =>
                res.end(
                    `Ingredient ${req.params.ingredientId} deleted from list.`
                )
            )
            .catch((err) => next(err));
    });

module.exports = ownedRouter;
