import PlusIcon from '../../assets/icon/plus.svg?react';
import { Button } from '../../components';
import styles from './styles.module.scss';
import TextField from '../../components/TextField';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FileType } from '../../stores/fileStore.ts';
import { getTeams } from '../../api/team.ts';
import { MoonLoader } from 'react-spinners';
import TeamItem from '../../components/TeamItem';

export default function StudentManage() {
	const navigate = useNavigate();

	const [ searchParams ] = useSearchParams();
	const groupId = searchParams.get('groupId');
	const name = searchParams.get('name');

	const [ teams, setTeams ] = useState<FileType[]>([]);
	const [ searchResult, setSearchResult ] = useState<FileType[]>([]);
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	useEffect(() => {
		if (!groupId || !name) {
			navigate('/teamBuilding');
		} else {
			setIsLoading(true);
			getTeams(groupId)
				.then((response) => {
					setTeams(response);
					setIsLoading(false);
				});
		}
	}, []);

	const [ keyword, setKeyword ] = useState<string>('');

	useEffect(() => {
		setSearchResult(teams.filter((team) => team.name.includes(keyword)));
	}, [ keyword, teams ]);

	return (
		<div className={ styles.container }>
			<TextField placeholder={ '검색어를 입력해주세요' } text={ keyword } setText={ setKeyword } id={ 'search' } />
			<h1 className={ styles.title }>현재 추가된{ '\n' }{ name }의 팀 목록이에요</h1>

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
						teams.length == 0 ? (
							<p className={ styles.empty }>
								아직 만들어진 팀이 없어요!{ '\n' }지금 바로 만들어보세요!
							</p>
						) : (
							searchResult.length == 0 ? (
								<p className={ styles.empty }>
									검색 결과가 없어요!{ '\n' }다시 검색해보세요!</p>
							) : (
								searchResult.map((team, index) => {
									return (
										<TeamItem sheetId={ groupId! } sheetName={ name! } id={ team.groupId } title={ team.name }
										          key={ index } />
									);
								})
							)
						)
					)
				}
			</div>

			<Button icon={ <></> } text={ '편집' } className={ styles.editButton } onClick={ () => {
				navigate(`/teamBuilding/edit?groupId=${ groupId }&name=${ name }`);
			} } disabled={ true } />
			<Button icon={ <PlusIcon /> } className={ styles.button } onClick={ () => {
				navigate(`/studentManage/add?groupId=${ groupId }&name=${ name }`);
			} } />
		</div>
	);
}
