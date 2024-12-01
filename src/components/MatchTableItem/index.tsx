import styles from './styles.module.scss';
import SvgIcon from '../SvgIcon';
import ArrowForwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate } from 'react-router-dom';

interface MatchTableItemProps {
	id: string;
	title: string;
	type: string;
	data: string;
}

export default function MatchTableItem({ id, title, type, data }: MatchTableItemProps) {
	const navigate = useNavigate();

	return (
		<div className={ styles.container } onClick={ () => {
			navigate(`/matchTable/detail?data=${ data }`);
		} }>
			<p className={ styles.title }>{ title }</p>

			<div className={ styles.rightContainer }>
				<p className={ styles.type }>{ type === 'single' ? '단식' : '복식' }</p>
				<SvgIcon icon={ <ArrowForwardIcon /> } color={ '#B5B5B5' } width={ 16 } height={ 16 } />
			</div>
		</div>
	);
}
