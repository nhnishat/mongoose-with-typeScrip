import httpStatus from 'http-status';
import sendResponse from '../../utils';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
	const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
		req.body
	);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Academic semester created successfully',
		data: result, // Use the actual data here
	});
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
	const result = await AcademicSemesterServices.getAllAcademicSemesterIntoDb();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'All academic semester',
		data: result,
	});
});

const SingleAcademicSemester = catchAsync(async (req, res) => {
	const semesterId = req.params.semesterId;
	const result = await AcademicSemesterServices.getSingleAcademicSemesterIntoDb(
		semesterId
	);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'academic semester updated',
		data: result,
	});
});
const UpdateAcademicSemester = catchAsync(async (req, res) => {
	const semesterId = req.params.semesterId;
	const data = req.body;
	console.log({ semesterId }, { data });
	const result = await AcademicSemesterServices.UpdateAcademicSemesterIntoDb(
		semesterId,
		data
	);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'A single Academic semester retrieved successfully',
		data: result,
	});
});

export const AcademicSemesterControllers = {
	createAcademicSemester,
	getAllAcademicSemester,
	SingleAcademicSemester,
	UpdateAcademicSemester,
};
