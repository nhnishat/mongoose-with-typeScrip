import httpStatus from 'http-status';
import sendResponse from '../../utils';
import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
	const result = await AcademicFacultyServices.createAcademicFacultyIntoDb(
		req.body
	);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Create Academic Faculty  successfully',
		data: result,
	});
});

const getAllAcademicFaculties = catchAsync(async (req, res) => {
	const result = await AcademicFacultyServices.getAllAcademicFacultiesIntoDb();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: ' Academic Faculty are retrieved successfully',
		data: result,
	});
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
	const { facultyId } = req.params;
	const result = await AcademicFacultyServices.getSingleAcademicFacultyIntoDb(
		facultyId
	);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Single Academic Faculty are retrieved successfully',
		data: result,
	});
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
	const { facultyId } = req.params;
	const result =
		await AcademicFacultyServices.updateSingleAcademicFacultyIntoDb(
			facultyId,
			req.body
		);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: ' Academic Faculty are update successfully',
		data: result,
	});
});

export const AcademicFacultyController = {
	createAcademicFaculty,
	getAllAcademicFaculties,
	getSingleAcademicFaculty,
	updateAcademicFaculty,
};
