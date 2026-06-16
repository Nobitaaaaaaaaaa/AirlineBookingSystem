class AppError extends Error {
    constructor(name, message, explanation, statusCode) {
        super();
        this.message = message;
        this.name = name;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;