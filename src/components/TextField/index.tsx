import styles from './styles.module.scss';

interface TextFieldProps {
	className?: string;
	placeholder: string;
	text: string;
	setText: (text: string) => void;
	id: string;
	label?: string;
}

export default function TextField({ placeholder, className, text, setText, id, label }: TextFieldProps) {
	const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			(document.activeElement as HTMLElement)?.blur();
		}
	};
	return (
		<div className={ [ styles.container, className ].join(' ') }>
			{
				label && (
					<label htmlFor={ id } className={ styles.label }>{ label }</label>
				)
			}
			<input
				id={ id }
				value={ text }
				onChange={ (e) => setText(e.target.value) }
				placeholder={ placeholder }
				onKeyDown={ handleSubmit }
			/>
		</div>
	);
}
