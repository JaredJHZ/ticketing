import {ValidationError} from 'express-validator';

export class DatabaseError extends Error {

    reason = "Error connecting to database";
    statusCode = 500;
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }

    serializeErrors() {
        return [
            {message: this.reason}
        ]
    }
}