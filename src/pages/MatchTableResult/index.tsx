import Arrow_forwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { Button } from '../../components';
import { useEffect, useState } from 'react';
import BracketSingle from '../../components/BracketSingle';
import BracketDouble from '../../components/BracketDouble';

export default function MatchTableResult() {
	const navigate = useNavigate();

	const [ searchParams ] = useSearchParams();
	const sheetId = searchParams.get('sheetId');
	const sheetName = searchParams.get('sheetName');
	const id = searchParams.get('id');
	const name = searchParams.get('name');
	const data = searchParams.get('data');

	const [ result, setResult ] = useState<{
		matchId: string;
		matchType: string;
		student1: string[];
		student2: string[];
	}[] | undefined>(undefined);

	useEffect(() => {
		if (!sheetId || !sheetName || !id || !name || !data) {
			navigate('/teamBuilding');
		} else {
			setResult(JSON.parse(decodeURIComponent(atob(data))));
		}
	}, []);

	const handleClick = () => {
		navigate('/matchTable');
	};

	return (
		<>
			<div className={ styles.container }>
				<h1 className={ styles.title }>아래와 같이{ '\n' }대진표가 만들어졌어요</h1>

				<div className={ styles.main }>
					{
						result && result.map((item) => (
							item.matchType === 'single' ? (
								<BracketSingle student1={ item.student1[0] } student2={ item.student2[0] } />
							) : (
								<BracketDouble student1={ item.student1 } student2={ item.student2 } />
							)
						))
					}
				</div>

				<Button
					text={ '완료' }
					icon={ <Arrow_forwardIcon /> }
					className={ styles.button }
					onClick={ handleClick }
				/>
			</div>
		</>
	);
}
