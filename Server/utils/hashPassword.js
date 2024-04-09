const bcrypt = require('bcrypt');
require('dotenv').config();
const logger = require('pino')()

/**
 * Generates a hashed password using bcrypt.
 *
 * @param {string} password - The password to be hashed.
 * @return {string} The hashed password.
 */
const hashPassword =  (password) => {
    const saltRounds = 10; //TODO: get it from environment
    const salt =  bcrypt.genSaltSync(saltRounds);
    const hash =  bcrypt.hashSync(password, salt);
    return hash;
}

logger.info("hashed password: " + hashPassword("checking"))

module.exports = { hashPassword };