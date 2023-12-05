import { Schema, model } from 'mongoose';
import { TAcaDemicDepartment } from './academicDepartment.interface';

const AcademicDepartmentSchema = new Schema<TAcaDemicDepartment>({
	Name: {
		type: String,
		required: true,
	},
	academicFaculty: {
		type: Schema.Types.ObjectId,
	},
});

export const AcaDemicDepartment = model<TAcaDemicDepartment>(
	'AcaDemicDepartment',
	AcademicDepartmentSchema
);
