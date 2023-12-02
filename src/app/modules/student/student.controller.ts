import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
	try {
		const { student: studentData } = req.body;
		//data a schema validation using zod
		const zodPassData = studentValidationSchema.parse(studentData);
		//will call services function to send this data
		const result = await StudentServices.createStudentIntoDB(zodPassData);
		// send res
		res.status(200).json({
			success: true,
			message: 'student created successfully',
			data: result,
		});
	} catch (err) {
		console.log(err);
	}
};

const getAllStudent = async (req: Request, res: Response) => {
	try {
		const result = await StudentServices.getAllStudentFromDB();
		res.status(200).json({
			success: true,
			message: 'students are retrieved  successfully',
			data: result,
		});
	} catch (error) {
		console.log(error);
	}
};
const getSingleStudent = async (req: Request, res: Response) => {
	try {
		const { studentId } = req.params;
		const result = await StudentServices.singleStudentFromDB(studentId);
		res.status(200).json({
			success: true,
			message: 'single student found successfully',
			data: result,
		});
	} catch (error) {
		console.log(error);
	}
};
export const StudentController = {
	createStudent,
	getAllStudent,
	getSingleStudent,
};
