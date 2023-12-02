import { Schema, model } from 'mongoose';
import {
	StudentModel,
	TGuardian,
	TLocalGuardian,
	TStudent,
	TUserName,
} from './student.interface';
const userNameSchema = new Schema<TUserName>({
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

const guardianSchema = new Schema<TGuardian>({
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

const localGuardianSchema = new Schema<TLocalGuardian>({
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
const studentSchema = new Schema<TStudent, StudentModel>({
	id: { type: String, required: true, unique: true },
	name: {
		type: userNameSchema,
		required: true,
	},
	gender: {
		type: String,
		enum: {
			values: ['male', 'female', 'other'],
			message:
				"The gender can only be one of the following :'male','female' or 'other'",
		},
		required: true,
	},
	dateOfBirth: String,
	email: { type: String, required: true, unique: true },
	contactNo: { type: String, required: true },
	emergencyContactNo: { type: String, required: true },
	bloodGroup: {
		type: String,
		enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
		// required: true,
	},
	presentAddress: { type: String, required: true },
	permanentAddress: { type: String, required: true },
	guardian: {
		type: guardianSchema,
		required: true,
	},
	localGuardian: {
		type: localGuardianSchema,
		required: true,
	},
	profileImg: { type: String },
	isActive: {
		type: String,
		enum: ['active', 'block'],
		// required: true,
		default: 'active',
	},
});
// creating a custom statices method

studentSchema.statics.isUserExists = async function (id: string) {
	const existingUser = await Student.findOne({ id });
	return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
