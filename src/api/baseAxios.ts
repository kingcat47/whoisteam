import axios from 'axios';
import Cookies from 'js-cookie';

interface AxiosConfig {
	auth?: boolean;
}

const createAxios = ({ auth = false }: AxiosConfig = {}) => {
	const instance = axios.create({
		baseURL: 'https://mixir-api.sunrin.kr',
		timeout: 5000,
		headers: {
			'Content-Type': 'application/json',
			...(auth && {
				Authorization: `Bearer ${ Cookies.get('accessToken') }`,
			}),
		},
	});

	return instance;
};

export default createAxios;
