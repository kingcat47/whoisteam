import styles from './styles.module.scss';
import SvgIcon from '../SvgIcon';
import ArrowForwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate } from 'react-router-dom';

interface FileItemProps {
	id: string;
	title: string;
}

export default function FileItem({ id, title }: FileItemProps) {
	const navigate = useNavigate();

	return (
		<div className={ styles.container } onClick={ () => {
			navigate(`/studentManage?groupId=${ id }&name=${ title }`);
		} }>
			<p>{ title }</p>
			<SvgIcon icon={ <ArrowForwardIcon /> } color={ '#B5B5B5' } width={ 16 } height={ 16 } />
		</div>
	);
}
