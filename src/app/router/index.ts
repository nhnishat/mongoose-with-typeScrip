import { Router } from 'express';

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
];

pathAndRoute.forEach((route) => router.use(route.path, route.router));

export default router;
