const bcrypt = require('bcrypt');
require('dotenv').config();
const logger = require('pino')();

/**
 * Generates a hashed password using bcrypt.
 *
 * @param {string} password - The password to be hashed.
 * @return {string} The hashed password.
 */
const hashPassword = (password) => {
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};
module.exports = { hashPassword };
