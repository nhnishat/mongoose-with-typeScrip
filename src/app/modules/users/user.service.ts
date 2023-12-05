import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { User } from './user-model';
import { generateStudentId } from './user.utils';
import { TUser } from './users.interface';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
	// if (await User.isUserExists(studentData.id)) {
	// 	throw new Error('user already exists');
	// }

	// create a object user
	const userData: Partial<TUser> = {};

	// if password not given, use default password
	userData.password = password || (config.default_password as string);

	// set student role
	userData.role = 'student';

	// find academic semester info
	const admissionSemesters =
		((await AcademicSemester.findById(
			payload.admissionSemester
		)) as TAcademicSemester) || null;

	// set manually id
	userData.id = await generateStudentId(admissionSemesters);
	// create a user
	const newUser = await User.create(userData);

	// create a student
	if (Object.keys(newUser).length) {
		// set id, _id as
		payload.id = newUser.id; //ambeding id
		payload.user = newUser._id; //reference _id
		const newStudent = await Student.create(payload);
		return newStudent;
	}
};
export const UserServices = {
	createStudentIntoDB,
};
