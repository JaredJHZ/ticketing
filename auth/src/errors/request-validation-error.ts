import {ValidationError} from 'express-validator';

export class RequestValidatorError extends Error {
    
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super();
        // only because we are extending built in class
        Object.setPrototypeOf(this, RequestValidatorError.prototype);
    }

    serializeErrors() {
        return this.errors.map(
            err => {
                return {
                    message: err.msg,
                    field: err.param
                }
            }
        )
    }
}