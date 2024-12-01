import styles from './styles.module.scss';
import PlusIcon from '../../assets/icon/plus.svg?react';

import { BackButton, Button } from '../../components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TextField from '../../components/TextField';
import { useState } from 'react';
import { createStudents } from '../../api/student.ts';
import Picker from '../../components/Picker';

export default function StudentAdd() {
	const navigate = useNavigate();

	const [ searchParams ] = useSearchParams();
	const sheetId = searchParams.get('sheetId');
	const sheetName = searchParams.get('sheetName');
	const id = searchParams.get('id');
	const name = searchParams.get('name');

	const handleClick = () => {
		setIsLoading(true);

		if (sheetId && id && sheetName && name) {
			createStudents(sheetId, name, {
				name: studentName,
				level: studentLevel,
				gender: studentGender,
			})
				.then((response) => {
					if (response) {
						setIsLoading(false);
						navigate(`/studentManage/student?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ name }`);
					}
				});
		}
	};

	const [ studentName, setStudentName ] = useState<string>('');
	const [ studentGender, setStudentGender ] = useState<string>('남');
	const [ studentLevel, setStudentLevel ] = useState<string>('중');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	return (
		<>
			<div className={ styles.container }>
				<div className={ styles.titleContainer }>
					<BackButton />
					<h1 className={ styles.title }>
						정보를 기입하여{ '\n' }학생을 추가해주세요
					</h1>
				</div>
				<div className={ styles.main }>
					<TextField placeholder={ '학생 이름을 입력해주세요' } text={ studentName } setText={ setStudentName }
					           id={ 'student-name' } label={ '학생 이름' } />
					<Picker items={ [ '남', '여' ] } selectedItem={ studentGender } setSelectedItem={ setStudentGender } />
					<Picker items={ [ '하', '중', '상' ] } selectedItem={ studentLevel } setSelectedItem={ setStudentLevel } />
				</div>
				<Button
					icon={ <PlusIcon /> }
					text={ '추가하기' }
					className={ styles.button }
					onClick={ handleClick }
					disabled={ studentName === '' || studentGender === '' || studentLevel === '' }
					isLoading={ isLoading }
				/>
			</div>
		</>
	);
}
