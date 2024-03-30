const express = require('express');
const { pool } = require('./db_config');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const jsonParser = bodyParser.json();

app.use(jsonParser);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

pool.connect()
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('DB not connected', err));

const ownedRouter = require('./routes/ownedRouter');

app.use('/owned', ownedRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
