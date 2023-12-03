import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
	const { password, student: studentData } = req.body;
	//data a schema validation using zod
	// const zodPassData = studentValidationSchema.parse(studentData);
	//will call services function to send this data
	const result = await UserServices.createStudentIntoDB(password, studentData);
	// send res
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'student created successfully',
		data: result,
	});
});

export const UserController = {
	createStudent,
};
