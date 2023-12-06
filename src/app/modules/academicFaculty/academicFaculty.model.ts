import httpStatus from 'http-status';
import { model, Schema } from 'mongoose';
import AppError from '../../Errors/AppError';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>(
	{
		name: {
			type: String,
			require: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

academicFacultySchema.pre('save', async function (save) {
	const isFacultyExist = await AcademicFaculty.findOne({
		name: this.name,
	});
	if (isFacultyExist) {
		throw new AppError(
			httpStatus.NOT_FOUND,
			'This department is already exist!'
		);
	}
	save();
});
academicFacultySchema.pre('findOne', async function (save) {
	const query = this.getQuery();
	const isFacultyExist = await AcademicFaculty.findOneAndUpdate(query);
	if (isFacultyExist) {
		throw new AppError(
			httpStatus.NOT_FOUND,
			'This department is already exist!'
		);
	}
	save();
});

export const AcademicFaculty = model<TAcademicFaculty>(
	'AcademicFaculties',
	academicFacultySchema
);
