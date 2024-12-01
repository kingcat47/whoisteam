import styles from './styles.module.scss';
import PlusIcon from '../../assets/icon/plus.svg?react';

import { BackButton, Button } from '../../components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TextField from '../../components/TextField';
import { useState } from 'react';
import { createTeam } from '../../api/team.ts';

export default function StudentManageAdd() {
	const navigate = useNavigate();

	const [ searchParams ] = useSearchParams();
	const groupId = searchParams.get('groupId');
	const name = searchParams.get('name');

	const handleClick = () => {
		setIsLoading(true);

		if (groupId) {
			createTeam(groupId, teamName)
				.then((response) => {
					if (response) {
						setIsLoading(false);
						navigate(`/studentManage?groupId=${ groupId }&name=${ name }`);
					}
				});
		}
	};

	const [ teamName, setTeamName ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	return (
		<>
			<div className={ styles.container }>
				<div className={ styles.titleContainer }>
					<BackButton />
					<h1 className={ styles.title }>
						정보를 기입하여{ '\n' }팀을 추가해주세요
					</h1>
				</div>
				<TextField placeholder={ '팀 이름을 입력해주세요' } text={ teamName } setText={ setTeamName }
				           id={ 'team-name' } label={ '팀 이름' } />
				<Button
					icon={ <PlusIcon /> }
					text={ '추가하기' }
					className={ styles.button }
					onClick={ handleClick }
					disabled={ teamName === '' }
					isLoading={ isLoading }
				/>
			</div>
		</>
	);
}
