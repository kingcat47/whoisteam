import BracketItem from '../BracketItem';
import styles from './styles.module.scss';

interface BracketDoubleProps {
	student1: string[];
	student2: string[];
}

export default function BracketDouble({ student1, student2 }: BracketDoubleProps) {
	return (
		<div className={ styles.container }>
			<div className={ styles.item }>
				{ student1.map((student, index) => (
					<BracketItem name={ student } key={ index } />
				)) }
			</div>
			<div className={ styles.lineContainer }>
				<div className={ styles.leftLine }></div>
				<div className={ styles.line }></div>
				<div className={ styles.rightLine }></div>
			</div>
			<div className={ styles.item }>
				{ student2.map((student, index) => (
					<BracketItem name={ student } key={ index } />
				)) }
			</div>
		</div>
	);
}
