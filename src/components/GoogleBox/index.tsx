import GoogleIcon from '../../assets/icon/google.svg?react';
import styles from './styles.module.scss';
import SvgIcon from '../SvgIcon';
import baseAxios from '../../api/baseAxios.ts';

interface GoogleBoxProp {
	className?: string;
}

function GoogleBox({ className }: GoogleBoxProp) {
	// const navigate = useNavigate();
	const api = baseAxios();
	//
	const handleLogin = async () => {
		try {
			const response = await api.get('/auth/authorization-url');
			const authUrl = response.data.data.url;

			if (!authUrl) {
				throw new Error('Authorization URL is missing');
			}

			const authWindow = window.open(authUrl, 'GoogleAuth', 'width=500,height=600');
			if (!authWindow) {
				alert('팝업이 차단되었습니다. 팝업 차단을 해제해주세요.');
			}
		} catch (error) {
			console.error('Failed to get authorization URL:', error);
			alert('로그인 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
		}
	};

	return (
		<div className={ [ styles.container, className ].join(' ') } onClick={ handleLogin }>
			<SvgIcon color={ 'none' } icon={ <GoogleIcon /> } width={ 28 } height={ 28 } />
			<div className={ styles.text }>Google로 시작하기</div>
		</div>
	);
}

export default GoogleBox;
