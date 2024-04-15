require('dotenv').config();
const Pool = require('pg-pool');

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
    ssl: process.env.ssl,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
});

const dbConnect = async () => {
    try {
        client = await pool.connect();
        console.log('DB connected Successfully');
        client.release();
    } catch (err) {
        console.error('DB not connected', err);
    }
};

module.exports = {
    pool,
    dbConnect,
};
