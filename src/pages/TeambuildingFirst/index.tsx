import styles from './styles.module.scss';
import { BackButton, Button } from '../../components';
import ArrowForwardIcon from '../../assets/icon/arrow_forward.svg?react';
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/TextField';
import { useState } from 'react';
import { createFiles, getFiles } from '../../api/files.ts';
import useFileStore from '../../stores/fileStore.ts';

export default function TeambuildingFirst() {
	const navigate = useNavigate();

	const { setIsLoading: setIsFileLoading, setFiles } = useFileStore((state) => state);

	const handleClick = () => {
		setIsLoading(true);

		createFiles(teamBuildingName)
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
	};

	const [ teamBuildingName, setTeamBuildingName ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	return (
		<>
			<div className={ styles.container }>
				<div className={ styles.titleContainer }>
					<BackButton />
					<h1 className={ styles.title }>
						정보를 기입하여{ '\n' }팀 빌딩을 완료해주세요
					</h1>
				</div>
				<TextField placeholder={ '그룹 이름을 입력해주세요' } text={ teamBuildingName } setText={ setTeamBuildingName }
				           id={ 'teambuilding-name' } label={ '그룹 이름' } />
				<Button
					icon={ <ArrowForwardIcon /> }
					text={ '저장하기' }
					className={ styles.button }
					onClick={ handleClick }
					disabled={ teamBuildingName === '' }
					isLoading={ isLoading }
				/>
			</div>
		</>
	);
}
