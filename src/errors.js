"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const handleErrors = (error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    if (error.message.includes("invalid input syntax for type uuid")) {
        return response.status(404).json({
            message: "invalid UUID",
        });
    }
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
};
exports.handleErrors = handleErrors;
