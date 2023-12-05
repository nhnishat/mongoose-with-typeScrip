import { academicSemesterNameOrCodeRSame } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
	// semester name semester code are sme

	if (academicSemesterNameOrCodeRSame[payload.name] !== payload.code) {
		throw new Error('Invalid semester code');
	}

	const result = await AcademicSemester.create(payload);
	return result;
};

const getAllAcademicSemesterIntoDb = async () => {
	const result = await AcademicSemester.find();
	return result;
};

const getSingleAcademicSemesterIntoDb = async (id: string) => {
	const result = await AcademicSemester.findById(id);
	return result;
};
const UpdateAcademicSemesterIntoDb = async (
	id: string,
	payload: TAcademicSemester
) => {
	if (
		payload.name &&
		payload.code &&
		academicSemesterNameOrCodeRSame[payload.name] !== payload.code
	) {
		throw new Error('Invalid semester code');
	}

	const result = await AcademicSemester.findByIdAndUpdate(
		{ _id: id },
		payload,
		{
			new: true,
		}
	);
	return result;
};

export const AcademicSemesterServices = {
	createAcademicSemesterIntoDB,
	getAllAcademicSemesterIntoDb,
	UpdateAcademicSemesterIntoDb,
	getSingleAcademicSemesterIntoDb,
};
