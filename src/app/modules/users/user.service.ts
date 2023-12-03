import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { User } from './user-model';
import { TUser } from './users.interface';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
	// if (await User.isUserExists(studentData.id)) {
	// 	throw new Error('user already exists');
	// }

	// create a object user
	const userData: Partial<TUser> = {};

	// if password not given, use default password
	userData.password = password || (config.default_password as string);

	// set student role
	userData.role = 'student';

	// set manually id
	userData.id = '209010001';
	// create a user
	const newUser = await User.create(userData);

	// create a student
	if (Object.keys(newUser).length) {
		// set id, _id as
		studentData.id = newUser.id; //ambeding id
		studentData.user = newUser._id; //reference _id
		const newStudent = await Student.create(studentData);
		return newStudent;
	}
};
export const UserServices = {
	createStudentIntoDB,
};
