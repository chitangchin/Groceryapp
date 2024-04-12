const express = require('express');
const { pool } = require('./db_config');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swagger = require('./swagger.js')

const app = express();
const port = 8080;

app.use(express.json()); //Middleware to parse body for requests and responses
app.use(cookieParser()); //Middleware to allow access to cookies
app.use(cors());

pool.connect()
.then(() => console.log('Connected to DB'))
.catch((err) => console.error('DB not connected', err));

const ownedRouter = require('./routes/ownedRouter'); //Imports ownedRouter
const userRouter = require('./routes/user.route.js');

app.use('/owned', ownedRouter); //Server refers to ownedRouter for all api calls to /owned
app.use('/user', userRouter);
swagger(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
