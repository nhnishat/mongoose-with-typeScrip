import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDb = async (payload: TAcademicFaculty) => {
	const result = await AcademicFaculty.create(payload);
	return result;
};
const getAllAcademicFacultiesIntoDb = async () => {
	const result = await AcademicFaculty.find();
	return result;
};
const getSingleAcademicFacultyIntoDb = async (id: string) => {
	const result = await AcademicFaculty.findById(id);
	return result;
};
const updateSingleAcademicFacultyIntoDb = async (
	id: string,
	payload: TAcademicFaculty
) => {
	const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
		new: true,
	});
	return result;
};

export const AcademicFacultyServices = {
	createAcademicFacultyIntoDb,
	getAllAcademicFacultiesIntoDb,
	getSingleAcademicFacultyIntoDb,
	updateSingleAcademicFacultyIntoDb,
};
