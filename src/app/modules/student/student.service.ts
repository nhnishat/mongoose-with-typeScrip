import { StudentModel } from '../student/student.model';
import { Student } from './student.interface';
const createStudentIntoDB = async (student: Student) => {
	const result = await StudentModel.create(student);
	return result;
};

const getAllStudentFromDB = async () => {
	const result = await StudentModel.find();
	return result;
};
const singleStudentFromDB = async (id: string) => {
	const result = await StudentModel.findOne({ id });
	return result;
};
export const StudentServices = {
	createStudentIntoDB,
	getAllStudentFromDB,
	singleStudentFromDB,
};
