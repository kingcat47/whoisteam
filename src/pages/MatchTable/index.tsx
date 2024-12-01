import styles from './styles.module.scss';
import TextField from '../../components/TextField';
import { useEffect, useState } from 'react';
import { getBrackets } from '../../api/bracket.ts';
import { MoonLoader } from 'react-spinners';
import MatchTableItem from '../../components/MatchTableItem';

export type BracketType = {
	_id: string;
	match_type: string;
	student1: string[]
	student2: string[]
}

export default function MatchTable() {
	const [ keyword, setKeyword ] = useState<string>('');
	const [ brackets, setBrackets ] = useState<BracketType[]>([]);

	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ searchedResult, setSearchedResult ] = useState<BracketType[]>([]);


	useEffect(() => {
		setIsLoading(true);
		getBrackets()
			.then((response) => {
				setBrackets(response);
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		setSearchedResult(brackets.filter((bracket) => {
			// match_type 검색
			if (keyword === '단식' && bracket.match_type === 'single') return true;
			if (keyword === '복식' && bracket.match_type === 'double') return true;

			// 학생 이름 검색 (student1과 student2 배열 모두 검색)
			const allStudents = [ ...bracket.student1, ...bracket.student2 ];
			return allStudents.some(student => student.includes(keyword));
		}));
	}, [ keyword, brackets ]);

	return (
		<div className={ styles.container }>
			<TextField placeholder={ '검색어를 입력해주세요' } text={ keyword } setText={ setKeyword } id={ 'search' }></TextField>
			<h1 className={ styles.title }>현재까지 추가된{ '\n' }대진표 목록이에요</h1>

			<div className={ styles.main }>
				{
					isLoading ? (
						<div style={ {
							display: 'flex',
							width: '100%',
							justifyContent: 'center',
							marginTop: '24px',
						} }>
							<MoonLoader color={ '#2871FF' } loading={ isLoading } size={ 36 } />
						</div>
					) : (
						brackets.length == 0 ? (
							<p className={ styles.empty }>
								아직 추가된 대진표가 없어요!{ '\n' }지금 바로 팀에서 만들어보세요!
							</p>
						) : (
							searchedResult.length == 0 ? (
								<p className={ styles.empty }>
									아직 추가된 대진표가 없어요!{ '\n' }지금 바로 팀에서 만들어보세요!
								</p>
							) : (
								searchedResult.map((bracket, index) => {
									return (
										<>
											<MatchTableItem key={ index } id={ bracket._id }
											                title={ `${ bracket.student1.join(', ') } VS ${ bracket.student2.join(', ') }` }
											                type={ bracket.match_type }
											                data={ btoa(encodeURIComponent(JSON.stringify(bracket))) } />
										</>
									);
								})
							)
						)
					)
				}
			</div>
		</div>
	);
}
