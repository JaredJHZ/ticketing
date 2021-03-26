import {Request, Response, NextFunction} from 'express';
import {DatabaseError} from '../errors/database-error';
import {RequestValidatorError} from '../errors/request-validation-error';

export const errorHandler = (err:Error , req: Request, 
    res : Response, next : NextFunction) => {

        if(err instanceof RequestValidatorError) {
         
            return res.status(err.statusCode).send( {
                errors: err.serializeErrors()
            } );
        }

        if(err instanceof DatabaseError) {
            return res.status(err.statusCode).send({
                errors: err.serializeErrors()
            })
        }

        res.status(400).send({
            errors: [
                {
                    message: 'Something went wrong'
                }
            ]
        });

}