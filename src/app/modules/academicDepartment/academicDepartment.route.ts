import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validaion';
const route = express.Router();
route.post(
	'/create-academic-department',
	validateRequest(
		AcademicDepartmentValidation.CreateAcademicDepartmentValidationSchema
	),
	AcademicDepartmentController.createAcademicDepartment
);

route.get('/', AcademicDepartmentController.getAllAcademicDepartment);
route.get(
	'/:departmentId',
	AcademicDepartmentController.getSingleAcademicDepartment
);
route.patch(
	'/:departmentId',
	validateRequest(
		AcademicDepartmentValidation.UpdateAcademicDepartmentValidationSchema
	),
	AcademicDepartmentController.getSingleAcademicDepartment
);

export const AcademicDepartmentRoute = route;
