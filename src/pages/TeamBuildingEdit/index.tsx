import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackButton, Button } from '../../components';
import TextField from '../../components/TextField';
import styles from './styles.module.scss';
import ArrowForwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { editFiles, getFiles } from '../../api/files.ts';
import useFileStore from '../../stores/fileStore.ts';

export default function TeamBuildingEdit() {
	const [ searchParams ] = useSearchParams();
	const navigate = useNavigate();
	const groupId = searchParams.get('groupId');
	const name = searchParams.get('name');

	const { setIsLoading: setIsFileLoading, setFiles } = useFileStore((state) => state);

	useEffect(() => {
		if (!groupId || !name) {
			navigate('/teamBuilding');
		} else {
			setTeamBuildingName(name);
		}
	}, []);

	const handleClick = () => {
		if (groupId) {
			setIsLoading(true);
			editFiles(groupId, teamBuildingName)
				.then((response) => {
					if (response) {
						setIsLoading(false);
						navigate('/teambuilding');
						setIsFileLoading(true);
						getFiles()
							.then((response) => {
								setFiles(response);
								setIsFileLoading(false);
							});
					}
				});
		}
	};

	const [ teamBuildingName, setTeamBuildingName ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	return (
		<div className={ styles.container }>
			<div className={ styles.titleContainer }>
				<BackButton />
				<h1 className={ styles.title }>
					정보를 기입하여{ '\n' }팀 빌딩을 수정해주세요
				</h1>
			</div>
			<TextField placeholder={ '팀 이름을 입력해주세요' } text={ teamBuildingName } setText={ setTeamBuildingName }
			           id={ 'teambuilding-name' } label={ '그룹 이름' } />
			<Button
				icon={ <ArrowForwardIcon /> }
				text={ '수정하기' }
				className={ styles.button }
				onClick={ handleClick }
				disabled={ teamBuildingName === '' }
				isLoading={ isLoading }
			/>
		</div>
	);
}
