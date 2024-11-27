import GoogleIcon from '../../assets/icon/google.svg?react';
import styles from './styles.module.scss';
import SvgIcon from '../SvgIcon';
import { useNavigate } from 'react-router-dom';
import baseAxios from '../../api/baseAxios.ts';
import { useGoogleLogin } from '@react-oauth/google';

interface GoogleBoxProp {
	className?: string;
}

function GoogleBox({ className }: GoogleBoxProp) {
	const navigate = useNavigate();
	const api = baseAxios();

	const googleLogin = useGoogleLogin({
		flow: 'auth-code',
		onSuccess: async (codeResponse) => {
			console.log(codeResponse);

			
		},
		onError: errorResponse => console.log(errorResponse),
	});

	return (
		<div className={ [ styles.container, className ].join(' ') } onClick={ googleLogin }>
			<SvgIcon color={ 'none' } icon={ <GoogleIcon /> } width={ 28 } height={ 28 } />
			<div className={ styles.text }>Google로 시작하기</div>
		</div>
	);
}

export default GoogleBox;
