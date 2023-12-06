import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import AppError from '../../Errors/AppError';
import { TAcaDemicDepartment } from './academicDepartment.interface';

const AcademicDepartmentSchema = new Schema<TAcaDemicDepartment>(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		academicFaculty: {
			type: Schema.Types.ObjectId,
			ref: 'AcademicFaculties',
		},
	},
	{
		timestamps: true,
	}
);

AcademicDepartmentSchema.pre('save', async function (save) {
	const isDepartmentExist = await AcademicDepartment.findOne({
		name: this.name,
	});
	if (isDepartmentExist) {
		throw new AppError(
			httpStatus.NOT_FOUND,
			'This department is already exist!'
		);
	}
	save();
});
AcademicDepartmentSchema.pre('findOne', async function (save) {
	const query = this.getQuery();
	const isDepartmentExist = await AcademicDepartment.findOneAndUpdate(query);
	if (isDepartmentExist) {
		throw new AppError(
			httpStatus.NOT_FOUND,
			'This department is already exist!'
		);
	}
	save();
});

export const AcademicDepartment = model<TAcaDemicDepartment>(
	'AcademicDepartment',
	AcademicDepartmentSchema
);
