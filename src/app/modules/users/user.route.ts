import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';

const router = express.Router();

const verifyZOD = (req: Request, res: Response, next: NextFunction) => {
	console.log('ZOD Verify');
};

router.post('/create-user', verifyZOD, UserController.createStudent);

export const UserRouter = router;
