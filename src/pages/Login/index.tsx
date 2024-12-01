import SvgIcon from '../../components/SvgIcon';
import styles from './styles.module.scss';
import LogoIcon from '../../assets/icon/logo.svg?react';
import { GoogleBox } from '../../components';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
    
		if (accessToken !== undefined) {
			navigate('/teamBuilding');
		}
	}, []);

	return (
		<>
			<div className={ styles.container }>
				<div className={ styles.space }></div>
				<SvgIcon icon={ <LogoIcon /> } color={ '#2871FF' }></SvgIcon>
				<h1 className={ styles.title }>팀 관리를{ '\n' }Mixir앱 하나로</h1>
			</div>
			<div className={ styles.google }>
				<GoogleBox />
			</div>
		</>
	);
}
