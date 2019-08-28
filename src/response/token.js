/**
 * @typedef LoginResponse
 * @property {string} token.required
 */
class LoginResponse {
    constructor(jwtToken) {
        this.token = jwtToken;
    }
}

module.exports = LoginResponse;
