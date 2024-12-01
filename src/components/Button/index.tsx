import styles from './styles.module.scss';
import React from 'react';
import SvgIcon from '../SvgIcon';
import { ClipLoader } from 'react-spinners';

interface ButtonProps {
	icon: React.ReactElement; //이거는 왜 ?:안됌?
	text?: string;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	isLoading?: boolean;
}

export default function Button({
	                               icon,
	                               text,
	                               onClick,
	                               className,
	                               disabled,
	                               isLoading,
                               }: ButtonProps) {
	return (
		<div className={ [ styles.container, className ].join(' ') } onClick={ () => {
			if (disabled || isLoading) return;

			if (onClick) {
				onClick();
			}
		} } style={ {
			backgroundColor: disabled || isLoading ? '#CACACA' : '#2871FF',
		} }>
			{
				isLoading ? (
					<ClipLoader size={ '20px' } color={ '#fff' } />
				) : (
					<>
						{ text && <p style={ { color: '#fff' } }>{ text }</p> }
						<SvgIcon icon={ icon } color={ '#fff' } width={ 28 } height={ 28 } />
					</>
				)
			}
		</div>
	);
}
