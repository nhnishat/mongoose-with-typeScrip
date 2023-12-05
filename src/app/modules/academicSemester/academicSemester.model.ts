import { Schema, model } from 'mongoose';
import {
	AcademicSemesterCode,
	AcademicSemesterName,
	Months,
} from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<TAcademicSemester>({
	name: {
		type: String,
		required: true,
		enum: AcademicSemesterName,
	},
	year: {
		type: String,
		required: true,
	},
	code: {
		type: String,
		enum: AcademicSemesterCode,
		required: true,
	},
	startMonth: {
		type: String,
		enum: Months,
		required: true,
	},
	endMonth: {
		type: String,
		enum: Months,
		required: true,
	},
});

academicSemesterSchema.pre('save', async function (next) {
	const isSemesterExists = await AcademicSemester.findOne({
		name: this.name,
		year: this.year,
	});
	if (isSemesterExists) {
		throw new Error('semester is all ready exists');
	}
});

export const AcademicSemester = model<TAcademicSemester>(
	'AcademicSemester',
	academicSemesterSchema
);
