require('dotenv').config();
const Pool = require('pg-pool');

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
    ssl: process.env.ssl,
});

module.exports = {
    pool,
};
