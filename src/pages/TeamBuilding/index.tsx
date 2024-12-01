import { useNavigate } from 'react-router-dom';
import PlusIcon from '../../assets/icon/plus.svg?react';
import { Button } from '../../components';
import styles from './styles.module.scss';
import useFileStore from '../../stores/fileStore.ts';
import FileItem from '../../components/FileItem';
import { MoonLoader } from 'react-spinners';

export default function TeamBuilding() {
	const navigate = useNavigate();

	const { files, isLoading } = useFileStore((state) => state);

	const handclick = () => {
		navigate('/teamBuilding/1');
	};

	return (
		<div className={ styles.container }>
			<h1 className={ styles.title }>
				현재 만들어진{ '\n' }전체 팀빌딩 목록이에요
			</h1>

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
						files.length == 0 ? (
							<p className={ styles.empty }>
								아직 만들어진 팀빌딩이 없어요!{ '\n' }지금 바로 만들어보세요!
							</p>
						) : (
							files.map((file, index) => {
								return (
									<>
										<FileItem id={ file.groupId } title={ file.name } key={ index } />
									</>
								);
							})
						)
					)
				}
			</div>

			<Button
				icon={ <PlusIcon /> }
				className={ styles.button }
				onClick={ handclick }
			/>
		</div>
	);
}
