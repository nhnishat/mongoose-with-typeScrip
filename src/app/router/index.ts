import { Router } from 'express';

import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRouter } from '../modules/users/user.route';

const router = Router();

const pathAndRoute = [
	{
		path: 'student',
		router: StudentRoutes,
	},
	{
		path: '/user',
		router: UserRouter,
	},
	{
		path: '/academic-semesters',
		router: AcademicSemesterRoutes,
	},
	{
		path: '/academic-faculties',
		router: AcademicFacultyRoute,
	},
];

pathAndRoute.forEach((route) => router.use(route.path, route.router));

export default router;
