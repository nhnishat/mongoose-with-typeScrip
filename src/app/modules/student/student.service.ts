import { Student } from '../student/student.model';
import { TStudent } from './student.interface';
const createStudentIntoDB = async (studentData: TStudent) => {
	if (await Student.isUserExists(studentData.id)) {
		throw new Error('user already exists');
	}
};

const getAllStudentFromDB = async () => {
	const result = await Student.find();
	return result;
};
const singleStudentFromDB = async (id: string) => {
	const result = await Student.findOne({ id });
	return result;
};
export const StudentServices = {
	createStudentIntoDB,
	getAllStudentFromDB,
	singleStudentFromDB,
};
