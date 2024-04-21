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
const NOT_IMPLEMENTED = 501;

//Response messages
const BAD_USERNAME =
    'Username must be alphanumeric and between 4 and 16 characters long';
const BAD_PASSWORD =
    'Password must be alphanumeric and between 8 and 32 characters long';
const USERNAME_ALREADY_EXISTS = 'Username already exists';
const REGISTRATION_SUCCESSFUL = 'Registration Successful!';
const UNEXPECTED_ERROR =
    'An unexpected error occurred';
const USER_DOESNT_EXIST = 'User does not exist';
const INVALID_CREDENTIALS = 'Invalid credentials';
const ERROR_LOGGING_IN = 'Error logging in';
const SUCCESSFULLY_LOGGED_IN = 'Successfully logged in';
const SUCCESSFULLY_LOGGED_OUT = 'Successfully logged out';
const ERROR_DURING_REGISTRATION = 'Error during registration';
const MISSING_INGREDIENTS = 'Missing ingredients in request';
const FAILED_TO_RETRIEVE_RECIPES = 'Failed to retrieve recipes';
const INVALID_INGREDIENTS =
    'Invalid ingredients provided. Must be an array of strings with length between 2 and 20 characters long';
const FAILED_TO_RETRIEVE_INGREDIENTS = 'Failed to retrieve ingredients';
const ALL_INGREDIENTS_RETURNED = 'All ingredients returned';
const NO_INGREDIENTS_OWNED = 'User has no ingredients';
const USER_INGREDIENTS_RETURNED = 'All user ingredients returned';
const ERROR_ADD_INGREDIENTS = 'There was a problem adding your ingredients';
const INGREDIENTS_ADDED = ' ingredients added to your list';
const NO_INGREDIENTS_DELETED = 'No ingredients deleted';
const ALL_INGREDIENTS_DELETED = 'All users ingredients deleted';
const ONE_USER_INGREDIENT_RETURNED = 'User ingredient returned';
const USER_DOESNT_OWN = 'User does not own ingredient';
const OPERATION_NOT_SUPPORTED = 'Operation not supported';
const USER_DELETED_INGREDIENT = 'User deleted ingredient with id: ';
const ALL_API_ROUTES = [
    '/owned/:userId',
    '/owned/:userId/:ingredientId',
    '/ingredient',
    '/user/login',
    '/user/logout',
    '/user/register',
    '/api/spoonacular/recipes',
    '/docs/api',
    '/docs/api/{owned}/{ingredient}/{user}/{api} 1 <= {optionalParams}.count() <= 4',
];

//Queries
const FIND_ALL_USERS_BY_USERNAME = 'SELECT * FROM users WHERE username = $1';
const INSERT_INTO_USERS_USERNAME_AND_PASSWORD =
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
const FIND_ALL_INGREDIENTS = 'SELECT * FROM ingredients';
const FIND_INGREDIENT_ID_BY_USER =
    'SELECT owned.ingredient_id, name FROM ingredients_owned AS owned INNER JOIN ingredients ON owned.ingredient_id = ingredients.id WHERE user_id = $1;';
const INSERT_INTO_USER_INGREDIENTS =
    'INSERT INTO ingredients_owned (user_id, ingredient_id) VALUES %L RETURNING ingredient_id';
const DELETE_USER_INGREDIENTS =
    'DELETE FROM ingredients_owned WHERE user_id = $1 RETURNING ingredient_id;';
const SELECT_ONE_USER_INGREDIENT =
    'SELECT owned.ingredient_id, name FROM ingredients_owned AS owned INNER JOIN ingredients ON owned.ingredient_id = ingredients.id WHERE user_id = $1 AND ingredient_id = $2';
const DELETE_SPECIFIC_INGREDIENT =
    'DELETE FROM ingredients_owned WHERE user_id = $1 AND ingredient_id = $2 RETURNING ingredient_id';

module.exports = {
    INVALID_INGREDIENTS,
    FAILED_TO_RETRIEVE_RECIPES,
    MISSING_INGREDIENTS,
    ERROR_DURING_REGISTRATION,
    OK,
    TEXT_PLAIN,
    CONTENT_TYPE,
    SUCCESSFULLY_LOGGED_IN,
    SUCCESSFULLY_LOGGED_OUT,
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
    NO_INGREDIENTS_OWNED,
    USER_INGREDIENTS_RETURNED,
    FIND_INGREDIENT_ID_BY_USER,
    ERROR_ADD_INGREDIENTS,
    INGREDIENTS_ADDED,
    NO_INGREDIENTS_DELETED,
    ALL_INGREDIENTS_DELETED,
    INSERT_INTO_USER_INGREDIENTS,
    DELETE_USER_INGREDIENTS,
    NOT_IMPLEMENTED,
    OPERATION_NOT_SUPPORTED,
    ONE_USER_INGREDIENT_RETURNED,
    USER_DOESNT_OWN,
    SELECT_ONE_USER_INGREDIENT,
    DELETE_SPECIFIC_INGREDIENT,
    USER_DELETED_INGREDIENT,
    ALL_API_ROUTES,
};
