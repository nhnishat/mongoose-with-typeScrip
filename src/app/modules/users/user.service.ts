import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../Errors/AppError';
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

	const session = await mongoose.startSession();

	try {
		session.startTransaction();
		// set manually id
		userData.id = await generateStudentId(admissionSemesters);
		// create a user and transaction--1
		const newUser = await User.create([userData], { session });

		// create a student
		if (!newUser.length) {
			throw new AppError(httpStatus.BAD_REQUEST, 'failed to create user');
		}
		// set id, _id as
		payload.id = newUser[0].id; //ambeding id
		payload.user = newUser[0]._id; //reference _id
		// create a user and transaction--1
		const newStudent = await Student.create([payload], { session });
		if (!newStudent.length) {
			throw new AppError(httpStatus.BAD_REQUEST, 'failed to create student');
		}
		await session.commitTransaction();
		await session.endSession();
		return newStudent;
	} catch (error) {
		session.abortTransaction();
		session.endSession();
	}
};
export const UserServices = {
	createStudentIntoDB,
};
