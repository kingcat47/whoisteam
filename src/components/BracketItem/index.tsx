import styles from './styles.module.scss';

interface BracketItemProps {
	name: string;
}

export default function BracketItem({ name }: BracketItemProps) {
	return (
		<div className={ styles.container }>{ name }</div>
	);
}
