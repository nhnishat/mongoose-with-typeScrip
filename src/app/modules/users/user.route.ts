import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { studentValidations } from '../student/student.validation';
import { UserController } from './user.controller';

const router = express.Router();

router.post(
	'/create-user',
	validateRequest(studentValidations.createStudentValidationSchema),
	UserController.createStudent
);

export const UserRouter = router;
