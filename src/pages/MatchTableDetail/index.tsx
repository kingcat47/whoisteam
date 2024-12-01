import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { BackButton } from '../../components';
import { useEffect, useState } from 'react';
import BracketSingle from '../../components/BracketSingle';
import BracketDouble from '../../components/BracketDouble';

export default function MatchTableDetail() {
	const navigate = useNavigate();

	const [ searchParams ] = useSearchParams();
	const data = searchParams.get('data');

	const [ result, setResult ] = useState<{
		_id: string;
		match_type: string;
		student1: string[];
		student2: string[];
	} | undefined>(undefined);

	useEffect(() => {
		if (!data) {
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
				<div className={ styles.titleContainer }>
					<BackButton />
					<h1 className={ styles.title }>아래와 같이{ '\n' }대진표가 만들어졌어요</h1>
				</div>

				<div className={ styles.main }>
					{

						result && (
							result.match_type === 'single' ? (
								<BracketSingle student1={ result.student1[0] } student2={ result.student2[0] } />
							) : (
								<BracketDouble student1={ result.student1 } student2={ result.student2 } />
							)
						)
					}
				</div>

			</div>
		</>
	);
}
