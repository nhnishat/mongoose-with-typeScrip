import httpStatus from 'http-status';
import sendResponse from '../../utils';
import catchAsync from '../../utils/catchAsync';
import { StudentServices } from './student.service';

const getAllStudents = catchAsync(async (req, res, next) => {
	const result = await StudentServices.getAllStudentsFromDB();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Students are retrieved successfully',
		data: result,
	});
});

const getSingleStudent = catchAsync(async (req, res, next) => {
	const { studentId } = req.params;
	const result = await StudentServices.getSingleStudentFromDB(studentId);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Students are retrieved successfully',
		data: result,
	});
});

const deleteStudent = catchAsync(async (req, res, next) => {
	const { studentId } = req.params;
	const result = await StudentServices.deleteStudentFromDB(studentId);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Student is deleted successfully',
		data: result,
	});
});

export const StudentControllers = {
	getAllStudents,
	getSingleStudent,
	deleteStudent,
};
