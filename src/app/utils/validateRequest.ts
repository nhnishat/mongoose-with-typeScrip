import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (Schema: AnyZodObject) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		// console.log('ZOD Verify');

		// validation check
		//if everything al right next()-> controller
		try {
			Schema.parseAsync({
				body: req.body,
			});
			next();
		} catch (err) {
			next(err);
		}
	};
};
export default validateRequest;
