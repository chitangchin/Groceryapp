const express = require('express');
const { dbConnect } = require('./db_config');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { verifyUser } = require('./middleware/auth.js');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json()); //Middleware to parse body for requests and responses
app.use(cookieParser()); //Middleware to allow access to cookies
app.use(cors());

dbConnect();

const ownedRouter = require('./routes/owned.route.js'); //Imports ownedRouter
const userRouter = require('./routes/user.route.js');
const spoonacular = require('./routes/spoonacular.route.js');
const ingredientRouter = require('./routes/ingredient.route.js');

app.use('/user', userRouter);

app.use(verifyUser); //Requires valid JWT to access all routes below

app.use('/owned', ownedRouter); //Server refers to ownedRouter for all api calls to /owned
app.use('/api', spoonacular);
app.use('/ingredient', ingredientRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;
