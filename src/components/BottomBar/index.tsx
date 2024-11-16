import styles from './styles.module.scss';
import AddIcon from '../../assets/icon/add.svg?react';
import AddFilledIcon from '../../assets/icon/addFill.svg?react';
import GroupIcon from '../../assets/icon/group.svg?react';
import GroupFilledIcon from '../../assets/icon/groupFill.svg?react';
import SwordsIcon from '../../assets/icon/swords.svg?react';
import SwordsFilledIcon from '../../assets/icon/swordsFill.svg?react';
import BottomBarItem from './BottomBarItem';

function BottomBar() {
	return (
		<>
			<div className={ styles.container }>
				<BottomBarItem path={ 'teamBuilding' } icon={ <GroupIcon /> } filledIcon={ <GroupFilledIcon /> } />
				<BottomBarItem path={ 'studentManage' } icon={ <AddIcon /> } filledIcon={ <AddFilledIcon /> } />
				<BottomBarItem path={ 'matchTable' } icon={ <SwordsIcon /> } filledIcon={ <SwordsFilledIcon /> } />
			</div>
		</>
	);
}

export default BottomBar;
