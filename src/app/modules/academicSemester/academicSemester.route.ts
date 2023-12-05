import express from 'express';
import validateRequest from '../../utils/validateRequest';
import AcademicSemesterControllers from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
	'/create-academic-semester',
	validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
	AcademicSemesterControllers.createAcademicSemester
);

export const AcademicSemesterRoutes = router;
