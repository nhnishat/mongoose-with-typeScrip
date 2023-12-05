import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const route = express.Router();
route.post(
	'/create-academic-faculty',
	validateRequest(
		AcademicFacultyValidation.createAcademicFacultyValidationSchema
	),
	AcademicFacultyController.createAcademicFaculty
);
route.get('/', AcademicFacultyController.getAllAcademicFaculties);
route.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
route.patch(
	'/:facultyId',
	validateRequest(
		AcademicFacultyValidation.updateAcademicFacultyValidationSchema
	),
	AcademicFacultyController.updateAcademicFaculty
);

export const AcademicFacultyRoute = route;
