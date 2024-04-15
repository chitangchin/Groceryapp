const USERNAME_REGEX = /^[0-9A-Za-z]{4,16}$/;
const PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

//Cookies
const TOKEN = 'token';

//Types
const NUMBER = 'number';

//Headers
const CONTENT_TYPE = 'Content-Type';
const TEXT_PLAIN = 'text/plain';

//Status codes
const OK = 200;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const NOT_FOUND = 404;
const CONFLICT = 409;
const INTERNAL_SERVER_ERROR = 500;

//Response messages
const BAD_USERNAME =
    'Username must be alphanumeric and between 4 and 16 characters long';
const BAD_PASSWORD =
    'Password must be alphanumeric and between 8 and 32 characters long';
const USERNAME_ALREADY_EXISTS = 'Username already exists, please try again';
const REGISTRATION_SUCCESSFUL = 'Registration Successful!';
const UNEXPECTED_ERROR =
    'An unexpected error occurred. Please try again later.';
const USER_DOESNT_EXIST = 'User does not exist. Please try again.';
const INVALID_CREDENTIALS = 'Invalid credentials';
const ERROR_LOGGING_IN = 'Error logging in';
const SUCCESSFULLY_LOGGED_IN = 'Successfully logged in';
const ERROR_DURING_REGISTRATION = 'Error during registration';
const MISSING_INGREDIENTS = 'Missing ingredients in request';
const FAILED_TO_RETRIEVE_RECIPES = 'Failed to retrieve recipes';
const INVALID_INGREDIENTS =
    'Invalid ingredients provided. Must be an array of strings with length between 2 and 20 characters long';
const FAILED_TO_RETRIEVE_INGREDIENTS = 'Failed to retrieve ingredients';
const ALL_INGREDIENTS_RETURNED = 'All ingredients returned';

//Queries
const FIND_ALL_USERS_BY_USERNAME = 'SELECT * FROM users WHERE username = $1';
const INSERT_INTO_USERS_USERNAME_AND_PASSWORD =
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
const FIND_ALL_INGREDIENTS = 'SELECT * FROM ingredients';

module.exports = {
    INVALID_INGREDIENTS,
    FAILED_TO_RETRIEVE_RECIPES,
    MISSING_INGREDIENTS,
    ERROR_DURING_REGISTRATION,
    OK,
    TEXT_PLAIN,
    CONTENT_TYPE,
    SUCCESSFULLY_LOGGED_IN,
    ERROR_LOGGING_IN,
    NUMBER,
    INVALID_CREDENTIALS,
    UNAUTHORIZED,
    NOT_FOUND,
    USER_DOESNT_EXIST,
    INTERNAL_SERVER_ERROR,
    UNEXPECTED_ERROR,
    REGISTRATION_SUCCESSFUL,
    TOKEN,
    CONFLICT,
    USERNAME_REGEX,
    PASSWORD_REGEX,
    BAD_REQUEST,
    BAD_USERNAME,
    BAD_PASSWORD,
    USERNAME_ALREADY_EXISTS,
    FIND_ALL_USERS_BY_USERNAME,
    INSERT_INTO_USERS_USERNAME_AND_PASSWORD,
    FIND_ALL_INGREDIENTS,
    FAILED_TO_RETRIEVE_INGREDIENTS,
    ALL_INGREDIENTS_RETURNED,
};
