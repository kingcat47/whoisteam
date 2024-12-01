import Card from '../../components/Card';
import Solo from '../../assets/icon/solo.svg?react';
import Cuple from '../../assets/icon/cuple.svg?react';
import Arrow_forwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { BackButton, Button } from '../../components';
import { useEffect, useState } from 'react';
import { createBracket } from '../../api/bracket.ts';

type Mode = 'single' | 'double';

export default function MatchTableCreate() {
	const navigate = useNavigate();
	const [ select, setSelect ] = useState('');

	const [ searchParams ] = useSearchParams();
	const sheetId = searchParams.get('sheetId');
	const sheetName = searchParams.get('sheetName');
	const id = searchParams.get('id');
	const name = searchParams.get('name');

	const getCardClassName = (mode: Mode) => {
		return `${ styles.card } ${ select === mode ? styles.active : '' }`;
	};

	const handleClickCard = (mode: Mode) => {
		setSelect(select === mode ? '' : mode);
	};

	useEffect(() => {
		if (!sheetId || !sheetName || !id || !name) {
			navigate('/teamBuilding');
		}
	}, []);

	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	const handleClick = () => {
		if (sheetId && sheetName && id && name) {
			setIsLoading(true);
			createBracket(sheetId, name, select)
				.then((response) => {
					if (response) {
						setIsLoading(false);
						if (response.length === 0) {
							alert('선수가 부족합니다.');
							navigate(`/studentManage/student?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ name }`);
							return;
						}
						const encodedData = btoa(encodeURIComponent(JSON.stringify(response)));

						navigate(`/matchTable/create/result?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ name }&data=${ encodedData }`);
					}
				});
		}
	};

	return (
		<>
			<div className={ styles.container }>
				<div className={ styles.titleContainer }>
					<BackButton />
					<h1 className={ styles.title }>단식, 복식을{ '\n' }선택해주세요</h1>
				</div>

				<div className={ styles.main }>
					<Card
						className={ getCardClassName('single') }
						icon={ <Solo /> }
						text={ '단식' }
						onClick={ () => handleClickCard('single') }
					/>
					<Card
						className={ getCardClassName('double') }
						icon={ <Cuple /> }
						text={ '복식' }
						onClick={ () => handleClickCard('double') }
					/>
					<Button
						text={ '대진표 짜기' }
						icon={ <Arrow_forwardIcon /> }
						className={ styles.button }
						onClick={ handleClick }
						isLoading={ isLoading }
						disabled={ select === '' }
					/>
				</div>
			</div>
		</>
	);
}
