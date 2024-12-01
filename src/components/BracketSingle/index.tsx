import BracketItem from '../BracketItem';
import styles from './styles.module.scss';

interface BracketSingleProps {
	student1: string;
	student2: string;
}

export default function BracketSingle({ student1, student2 }: BracketSingleProps) {
	return (
		<div className={ styles.container }>
			<BracketItem name={ student1 } />
			<div className={ styles.line }></div>
			<BracketItem name={ student2 } />
		</div>
	);
}
