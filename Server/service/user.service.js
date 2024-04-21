const { USER_DOESNT_EXIST, OK,ERROR_DURING_REGISTRATION, FIND_ALL_USERS_BY_USERNAME, NOT_FOUND, UNAUTHORIZED, INVALID_CREDENTIALS, SUCCESSFULLY_LOGGED_IN, USERNAME_REGEX, BAD_REQUEST, BAD_USERNAME, PASSWORD_REGEX, BAD_PASSWORD, CONFLICT, USERNAME_ALREADY_EXISTS, INSERT_INTO_USERS_USERNAME_AND_PASSWORD, REGISTRATION_SUCCESSFUL, INTERNAL_SERVER_ERROR } = require("../constants")
const bcrypt = require('bcrypt');
const { hashPassword } = require("../utils/hashPassword");
const logger = require('pino')()


class UserService {
    constructor(pool, auth) {
        this.pool = pool
        this.auth = auth
    }

    async login(username, password) {
        const user = await this.findUserByUsername(username)
        if(!user) {
            return {status: NOT_FOUND, message: USER_DOESNT_EXIST, id: null, username: null};
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if(!isPasswordValid){
            return {status: UNAUTHORIZED, message: INVALID_CREDENTIALS, id: null, username: null};
        }
        const token = this.auth.getToken(user.id);
        logger.info("Logged in user: " + username)
        return {status: OK, message: SUCCESSFULLY_LOGGED_IN, token, id: user.id, username: user.username};
    }
   
    async register(username, password) {
        const isValidUsername = USERNAME_REGEX;
         if (!isValidUsername.test(username)) {
             return {status: BAD_REQUEST, message: BAD_USERNAME, id: null, username: null};
         }
         const isValidPassword = PASSWORD_REGEX;
         if (!isValidPassword.test(password)) {
             return {status: BAD_REQUEST, message: BAD_PASSWORD, id: null, username: null};
         }
         const hashedPassword = hashPassword(password);
         try {
             const user = await this.findUserByUsername(username)
             if(user) {
                 logger.error("User already exists: " + user.username)
                 return {status: CONFLICT, message: USERNAME_ALREADY_EXISTS, id: null, username: null}; 
             }
             const userID = await this.pool.query(
                 INSERT_INTO_USERS_USERNAME_AND_PASSWORD,
                 [username, hashedPassword]
             )
           
             const token = this.auth.getToken(userID);
             logger.info("Registered user: " + username + " with id: " + userID.rows[0].id)
             return {status: OK, message: REGISTRATION_SUCCESSFUL, token, id: userID.rows[0].id, username: username}   
         } catch (err) {
             logger.error(err);
             return {status: INTERNAL_SERVER_ERROR, message: ERROR_DURING_REGISTRATION, id: null, username: null, a};
         }
        }
        async findUserByUsername(username) {
            const result = await this.pool.query(
                FIND_ALL_USERS_BY_USERNAME,
                [username]
            )
            return result.rows[0]
        }
}
module.exports = UserService
