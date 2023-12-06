import httpStatus from 'http-status';
import sendResponse from '../../utils';
import catchAsync from '../../utils/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
	const result = await AcademicDepartmentService.createAcademicDepartmentInfoDb(
		req.body
	);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Academic Department create Successfully',
		data: result,
	});
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
	const result =
		await AcademicDepartmentService.getAllAcademicDepartmentFromDb();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'All Academic Department retrieved Successfully',
		data: result,
	});
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
	const { departmentId } = req.params;

	const result =
		await AcademicDepartmentService.getSingleAcademicDepartmentFromDb(
			departmentId
		);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Single Academic Department retrieved Successfully',
		data: result,
	});
});
const UpdateSingleAcademicDepartment = catchAsync(async (req, res) => {
	const { departmentId } = req.params;

	const result =
		await AcademicDepartmentService.UpdateSingleAcademicDepartmentFromDb(
			departmentId,
			req.body
		);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: 'Academic Department update Successfully',
		data: result,
	});
});

export const AcademicDepartmentController = {
	createAcademicDepartment,
	getAllAcademicDepartment,
	getSingleAcademicDepartment,
	UpdateSingleAcademicDepartment,
};
