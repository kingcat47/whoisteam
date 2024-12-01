import baseAxios from './baseAxios.ts';

async function getBrackets() {
	const api = baseAxios({ auth: true });
	const response = await api.get('/bracket/list');

	return response.data.data.matches;
}

async function getBracket(matchId: string) {
	const api = baseAxios({ auth: true });

	const response = await api.get(`/bracket/match/${ matchId }`);

	return response.data.data;
}

async function createBracket(sheetId: string, groupName: string, type: string) {
	try {
		const api = baseAxios({ auth: true });

		const response = await api.post(`/bracket/${ sheetId }/${ groupName }/new`, { matchType: type });

		return response.data.data.matches;
	} catch (error) {
		console.error('Failed to create bracket:', error);
		return undefined;
	}
}


export { getBrackets, getBracket, createBracket };
