import express, {Request, Response} from 'express';
import {body , validationResult} from 'express-validator';
import {DatabaseError} from '../errors/database-error';
import {RequestValidatorError} from '../errors/request-validation-error';

const router = express.Router();

router.post('/api/users/signup', [
    body('email').isEmail().withMessage("Email must be valid!"),
    body('password').trim().isLength({min:4 , max: 20}).withMessage('Password must be between 4 and 20 characters')
] , (req : Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidatorError(errors.array());
    }
    
    const { email, password } = req.body;
    
    throw new DatabaseError();

    res.send({
        "message": "you're connecting to the db"
    });
})
 
export {router as signupRouter}