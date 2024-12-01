import baseAxios from './baseAxios.ts';

async function getTeams(sheetId: string) {
	const api = baseAxios({ auth: true });
	const response = await api.get(`/student/${ sheetId }/groups`);

	return response.data.data.groups;
}

async function createTeam(sheetId: string, name: string): Promise<boolean> {
	try {
		const api = baseAxios({ auth: true });

		await api.post(`/student/${ sheetId }/groups`, { name });

		return true;
	} catch (error) {
		console.error('Failed to create team:', error);
		return false;
	}
}

export { getTeams, createTeam };
