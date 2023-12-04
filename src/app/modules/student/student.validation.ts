import { z } from 'zod';

const userNameValidationSchema = z.object({
	firstName: z
		.string()
		.min(1, { message: 'First Name must have at least 1 character' })
		.max(20, { message: 'First Name must have at most 20 characters' })
		.refine((value) => /^[A-Z]/.test(value), {
			message: 'First Name must start with a capital letter',
		}),
	middleName: z.string(),
	lastName: z.string(),
});

const guardianValidationSchema = z.object({
	fatherName: z.string(),
	fatherOccupation: z.string(),
	fatherContactNo: z.string(),
	motherName: z.string(),
	motherOccupation: z.string(),
	motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
	name: z.string(),
	occupation: z.string(),
	contactNo: z.string(),
	address: z.string(),
});

export const createStudentValidationSchema = z.object({
	body: z.object({
		password: z
			.string()
			.max(20, { message: 'Password must have at most 20 characters' }),
		student: z.object({
			name: userNameValidationSchema,
			gender: z.enum(['male', 'female', 'other']),
			dateOfBirth: z.string(),
			email: z.string().email({ message: 'Invalid email address' }),
			contactNo: z.string(),
			emergencyContactNo: z.string(),
			bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
			presentAddress: z.string(),
			permanentAddress: z.string(),
			guardian: guardianValidationSchema,
			localGuardian: localGuardianValidationSchema,
			profileImg: z.string(),
		}),
	}),
});

export const studentValidations = {
	createStudentValidationSchema,
};
