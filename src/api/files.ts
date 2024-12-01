import baseAxios from './baseAxios.ts';

async function getFiles() {
	const api = baseAxios({ auth: true });
	const response = await api.get('/student/list');

	return response.data.data.groups;
}

async function createFiles(name: string): Promise<boolean> {
	try {
		const api = baseAxios({ auth: true });

		await api.post('/student/create', { name });

		return true;
	} catch (error) {
		console.error('Failed to create file:', error);
		return false;
	}
}

async function editFiles(sheetId: string, name: string): Promise<boolean> {
	try {
		const api = baseAxios({ auth: true });

		await api.post(`/student/${ sheetId }/edit`, { name });

		return true;
	} catch (error) {
		console.error('Failed to edit file:', error);
		return false;
	}
}

export { getFiles, createFiles, editFiles };
