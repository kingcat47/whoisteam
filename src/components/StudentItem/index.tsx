import styles from './styles.module.scss';
import SvgIcon from '../SvgIcon';
import ArrowForwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate } from 'react-router-dom';

interface TeamItemProps {
	sheetId: string;
	sheetName: string;
	id: string;
	name: string;
	studentName: string;
	number: string;
	gender: string;
	level: string;
}

export default function StudentItem({
	                                    sheetId,
	                                    sheetName,
	                                    id,
	                                    name,
	                                    studentName,
	                                    number,
	                                    gender,
	                                    level,
                                    }: TeamItemProps) {
	const navigate = useNavigate();

	return (
		<div className={ styles.container } onClick={ () => {
			navigate(`/studentManage/student/edit?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ name }`);
		} }>
			<div className={ styles.studentInfo }>
				<p className={ styles.studentName }>{ studentName }</p>
				<p className={ styles.number }>{ number }번 / <span style={ {
					color: gender === '남' ? '#4A90E2' : '#FF6C6C',
				} }>{ gender }</span></p>
			</div>
			<div className={ styles.rightContainer }>
				<p className={ styles.level } style={ {
					color: level === '하' ? '#4DCA2A' : level === '중' ? '#FF8800' : '#EB3A3A',
				} }>({ level })</p>
				<SvgIcon icon={ <ArrowForwardIcon /> } color={ '#B5B5B5' } width={ 16 } height={ 16 } />
			</div>
		</div>
	);
}
