import styles from './styles.module.scss';
import SvgIcon from '../SvgIcon';
import ArrowForwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate } from 'react-router-dom';

interface TeamItemProps {
	sheetId: string;
	sheetName: string;
	id: string;
	title: string;
}

export default function TeamItem({ sheetId, sheetName, id, title }: TeamItemProps) {
	const navigate = useNavigate();

	return (
		<div className={ styles.container } onClick={ () => {
			navigate(`/studentManage/student?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ title }`);
		} }>
			<p>{ title }</p>
			<SvgIcon icon={ <ArrowForwardIcon /> } color={ '#B5B5B5' } width={ 16 } height={ 16 } />
		</div>
	);
}
