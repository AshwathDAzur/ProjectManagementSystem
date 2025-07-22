import { HttpException } from "./root";

export class InternalException extends HttpException{
    constructor(
        message: string,
        statusCode: number,
        errorCode: number,
        errors?: any
    ) {
        super(message, statusCode, errorCode, errors);
    } 
}