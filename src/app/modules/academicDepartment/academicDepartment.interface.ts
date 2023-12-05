import { Types } from 'mongoose';

export type TAcaDemicDepartment = {
	Name: string;
	academicFaculty: Types.ObjectId;
};
