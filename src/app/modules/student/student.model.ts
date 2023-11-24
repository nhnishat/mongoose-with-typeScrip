import { Schema, model } from 'mongoose';
import {
	Guardian,
	LocalGuardian,
	Student,
	UserName,
} from './student.interface';
const userNameSchema = new Schema<UserName>({
	firstName: {
		type: String,
		required: [true, 'First Name is required'],
		trim: true,
		maxlength: [20, 'Name can not be more than 20 characters'],
	},
	middleName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
		required: [true, 'Last Name is required'],
		maxlength: [20, 'Name can not be more than 20 characters'],
	},
});

const guardianSchema = new Schema<Guardian>({
	fatherName: {
		type: String,
		trim: true,
		required: [true, 'Father Name is required'],
	},
	fatherOccupation: {
		type: String,
		trim: true,
		required: [true, 'Father occupation is required'],
	},
	fatherContactNo: {
		type: String,
		required: [true, 'Father Contact No is required'],
	},
	motherName: {
		type: String,
		required: [true, 'Mother Name is required'],
	},
	motherOccupation: {
		type: String,
		required: [true, 'Mother occupation is required'],
	},
	motherContactNo: {
		type: String,
		required: [true, 'Mother Contact No is required'],
	},
});

const localGuradianSchema = new Schema<LocalGuardian>({
	name: {
		type: String,
		required: [true, 'Name is required'],
	},
	occupation: {
		type: String,
		required: [true, 'Occupation is required'],
	},
	contactNo: {
		type: String,
		required: [true, 'Contact number is required'],
	},
	address: {
		type: String,
		required: [true, 'Address is required'],
	},
});
const studentSchema = new Schema<Student>({
	id: { type: String },
	name: userNameSchema,
	gender: ['male', 'female'],
	dateOfBirth: String,
	email: { type: String, required: true },
	contactNo: { type: String, required: true },
	emergencyContactNo: { type: String, required: true },
	bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
	presentAddress: { type: String, required: true },
	permanentAddress: { type: String, required: true },
	guardian: guardianSchema,
	localGuardian: localGuradianSchema,
	profileImg: { type: String },
	isActive: ['active', 'block'],
});

export const StudentModel = model<Student>('Student', studentSchema);
