import PlusIcon from '../../assets/icon/plus.svg?react';
import { BackButton, Button } from '../../components';
import styles from './styles.module.scss';
import TextField from '../../components/TextField';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { getStudents } from '../../api/student.ts';
import StudentItem from '../../components/StudentItem';

export type StudentType = {
	studentId: string;
	name: string;
	gender: string;
	level: string;
}

export default function Student() {
	const navigate = useNavigate();

	const [ searchParams ] = useSearchParams();
	const sheetId = searchParams.get('sheetId');
	const sheetName = searchParams.get('sheetName');
	const id = searchParams.get('id');
	const name = searchParams.get('name');

	const [ students, setStudents ] = useState<StudentType[]>([]);
	const [ searchResult, setSearchResult ] = useState<StudentType[]>([]);
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	useEffect(() => {
		if (!sheetId || !sheetName || !id || !name) {
			navigate(`/studentManage?groupId=${ sheetId }&name=${ sheetName }`);
		} else {
			setIsLoading(true);

			getStudents(sheetId, name)
				.then((response) => {
					const students: StudentType[] = response.map((student: StudentType) => ({
						...student,
						gender: student.gender === 'male' ? '남' : '여',
					}));
					setStudents(students);
					setIsLoading(false);
				});
		}
	}, []);

	const [ keyword, setKeyword ] = useState<string>('');

	useEffect(() => {
		setSearchResult(students.filter((student) => {
			return student.name.includes(keyword) || student.gender.includes(keyword) || student.level.includes(keyword);
		}));
	}, [ keyword, students ]);

	return (
		<div className={ styles.container }>
			<TextField placeholder={ '검색어를 입력해주세요' } text={ keyword } setText={ setKeyword } id={ 'search' } />
			<div className={ styles.titleContainer }>
				<BackButton />
				<h1 className={ styles.title }>현재 { name }에 { '\n' }추가된 학생 목록이에요</h1>
			</div>

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
						students.length == 0 ? (
							<p className={ styles.empty }>
								아직 추가된 학생이 없어요!{ '\n' }지금 바로 추가해보세요!
							</p>
						) : (
							searchResult.length == 0 ? (
								<p className={ styles.empty }>
									검색 결과가 없어요!{ '\n' }다시 검색해보세요!</p>
							) : (
								searchResult.map((student, index) => {
									return (
										<StudentItem sheetId={ sheetId! } sheetName={ sheetName! } id={ id! } name={ name! }
										             studentName={ student.name } number={ student.studentId } gender={ student.gender }
										             level={ student.level } key={ index } />
									);
								})
							)
						)
					)
				}
			</div>

			<Button icon={ <></> } text={ '편집' } className={ styles.editButton } onClick={ () => {
				// navigate(`/teamBuilding/edit?groupId=${ groupId }&name=${ name }`);
			} } disabled={ true } />
			<Button icon={ <></> } text={ '대진표 짜기' } className={ styles.bracketButton } onClick={ () => {
				navigate(`/matchTable/create?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ name }`);
			} } disabled={ students.length < 2 } />
			<Button icon={ <PlusIcon /> } className={ styles.button } onClick={ () => {
				navigate(`/studentManage/student/add?sheetId=${ sheetId }&sheetName=${ sheetName }&id=${ id }&name=${ name }`);
			} } />
		</div>
	);
}
