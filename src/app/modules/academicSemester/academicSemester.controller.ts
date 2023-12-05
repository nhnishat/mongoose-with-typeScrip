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

const AcademicSemesterControllers = {
	createAcademicSemester,
};

export default AcademicSemesterControllers;
