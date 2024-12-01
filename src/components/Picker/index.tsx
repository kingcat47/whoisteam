import styles from './styles.module.scss';

interface PickerProps {
	items: string[];
	selectedItem: string;
	setSelectedItem: (item: string) => void;
}

export default function Picker({ items, selectedItem, setSelectedItem }: PickerProps) {
	return (
		<div className={ styles.container }>
			{
				items.map((item) => {
					return (
						<div className={ styles.item } style={ {
							backgroundColor: item === selectedItem ? '#2871FF' : '#F6F6F6',
							color: item === selectedItem ? '#FFFFFF' : '#000000',
						} } onClick={ () => {
							setSelectedItem(item);
						} }>
							{ item }
						</div>
					);
				})
			}
		</div>
	);
}
