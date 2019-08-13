/**
 * @typedef ValidationError
 * @property {string} field.required
 * @property {string} message.required
 */
class ValidationError {
    constructor(field, message) {
        this.field = field;
        this.message = message;
    }
}

/**
 * @typedef ErrorResponse
 * @property {Array.<ValidationError>} errors.required
 */
class ErrorResponse {
    constructor(errors) {
        this.errors = errors;
    }
}

module.exports = { ValidationError, ErrorResponse };
