// message, status code, error codes

export class HttpException extends Error {
    public message: string;
    public statusCode: number;
    public errorCode: number;
    public errors: any;

    constructor(message: string, statusCode: number, errorCode: number, errors: any) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.errors = errors;
    }
}

export enum ErrorCodes {
    USER_ALREADY_EXISTS = 1001,
    USER_NOT_FOUND = 1002,
    INCORRECT_PASSWORD = 1003,
    UNPROCESSABLE_ENTITY = 1004,
    INTERNAL_SERVER_ERROR = 5000,
    VALIDATION_ERROR = 4000,
}