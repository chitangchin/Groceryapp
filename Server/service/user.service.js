const { USER_DOESNT_EXIST, OK, FIND_ALL_USERS_BY_USERNAME, NOT_FOUND, UNAUTHORIZED, INVALID_CREDENTIALS, SUCCESSFULLY_LOGGED_IN } = require("../constants")
const bcrypt = require('bcrypt');

class UserService {
    constructor(pool, auth) {
        this.pool = pool
        this.auth = auth
    }

    async login(username, password) {
        const user = await this.findUserByUsername(username)
        if(!user) {
            return {status: NOT_FOUND, message: USER_DOESNT_EXIST}
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if(!isPasswordValid){
            return {status: UNAUTHORIZED, message: INVALID_CREDENTIALS };
        }
        const token = this.auth.getToken(user.id);
        return {status: OK, message: SUCCESSFULLY_LOGGED_IN, token}
    }

    //TODO: add registration


    async findUserByUsername(username) {
        const result = await this.pool.query(
            FIND_ALL_USERS_BY_USERNAME,
            [username]
        )
        return result.rows[0]
    }
}
module.exports = UserService
