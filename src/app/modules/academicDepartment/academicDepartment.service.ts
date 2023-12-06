import { TAcaDemicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentInfoDb = async (payload: TAcaDemicDepartment) => {
	const result = await AcademicDepartment.create(payload);
	return result;
};

const getAllAcademicDepartmentFromDb = async () => {
	const result = await AcademicDepartment.find().populate('academicFaculty');
	return result;
};
const getSingleAcademicDepartmentFromDb = async (id: string) => {
	const result = await AcademicDepartment.findById(id).populate(
		'academicFaculty'
	);
	return result;
};
const UpdateSingleAcademicDepartmentFromDb = async (
	id: string,
	payload: TAcaDemicDepartment
) => {
	const result = await AcademicDepartment.findOneAndUpdate(
		{ _id: id },
		payload,
		{
			new: true,
		}
	);
	return result;
};

export const AcademicDepartmentService = {
	createAcademicDepartmentInfoDb,
	getAllAcademicDepartmentFromDb,
	getSingleAcademicDepartmentFromDb,
	UpdateSingleAcademicDepartmentFromDb,
};
