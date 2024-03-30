const express = require('express');
const { pool } = require('../db_config');
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
            'SELECT ingredient_id FROM ingredients_owned WHERE user_id = $1',
            [req.params.userId]
        )
            .then((result) => {
                if (result.rowCount) {
                    res.json(result.rows);
                } else {
                    res.statusCode = 404;
                    err_msg = `User ${req.params.userId} owns no ingredients.`;
                    return res.json(err_msg);
                }
            })
            .catch((err) => next(err));
    });

module.exports = ownedRouter;
