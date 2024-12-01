import baseAxios from './baseAxios.ts';

async function getStudents(sheetId: string, groupName: string) {
	const api = baseAxios({ auth: true });
	const response = await api.get(`/student/${ sheetId }/${ groupName }/members`);

	return response.data.data.students;
}

async function createStudents(sheetId: string, groupName: string, studentInfo: {
	name: string;
	gender: string;
	level: string;
}) {
	try {
		const api = baseAxios({ auth: true });

		await api.post(`/student/${ sheetId }/${ groupName }/members`, {
			name: studentInfo.name,
			gender: studentInfo.gender === '남' ? 'male' : 'female',
			level: studentInfo.level,
		});

		return true;
	} catch (error) {
		console.error('Failed to create student:', error);
		return false;
	}
}

export { getStudents, createStudents };
