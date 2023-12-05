import express from 'express';
import validateRequest from '../../utils/validateRequest';

import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
	'/create-academic-semester',
	validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
	AcademicSemesterControllers.createAcademicSemester
);
router.get(
	'/academic-semester',
	AcademicSemesterControllers.getAllAcademicSemester
);
router.get('/:semesterId', AcademicSemesterControllers.SingleAcademicSemester);
router.patch(
	'/:semesterId',
	validateRequest(AcademicSemesterValidation.UpdateAcademicSemesterValidation),
	AcademicSemesterControllers.UpdateAcademicSemester
);

export const AcademicSemesterRoutes = router;
