import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import baseAxios from '../../api/baseAxios.ts';
import Cookies from 'js-cookie';

export default function GoogleCallback() {
	const navigate = useNavigate();

	useEffect(() => {
		// URL에서 인증 코드를 얻어옴
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		if (code) {
			// 백엔드로 인증 코드 전송
			try {
				const api = baseAxios();

				api.post('/auth/login', { code })
					.then((response) => {
						console.log('Authentication successful:', response);
						const accessToken = response.data.data.accessToken;

						if (!accessToken) {
							throw new Error('Access token is missing');
						}

						Cookies.set('accessToken', accessToken);
						navigate('/teamBuilding');
					});
			} catch (error) {
				console.error('Authentication failed:', error);
			}
		}
	}, [ navigate ]);

	return <div>Processing authentication...</div>;
};
