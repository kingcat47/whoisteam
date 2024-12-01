import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Login, TeamBuilding } from './pages';
import StudentManage from './pages/StudentManage/index.tsx';
import MatchTable from './pages/MatchTable/index.tsx';
import TeambuildingFirst from './pages/TeambuildingFirst/index.tsx';
import MatchTableFirst from './pages/MatchTableFirst/index.tsx';
import MatchTableResult from './pages/MatchTableResult/index.tsx';
import NameTag from './components/NameTag/index.tsx';
import GoogleCallback from './pages/GoogleCallback';
import TeamBuildingEdit from './pages/TeamBuildingEdit';
import StudentManageAdd from './pages/StudentManageAdd';
import Student from './pages/Student';
import StudentAdd from './pages/StudentAdd';
import MatchTableCreate from './pages/MatchTableCreate';
import MatchTableDetail from './pages/MatchTableDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: 'test', element: <NameTag name={ '권지원' }></NameTag> },
			{ path: 'login', element: <Login /> },
			{ path: 'auth/callback', element: <GoogleCallback /> },
			{
				path: 'teamBuilding',
				element: <TeamBuilding />,
			},
			{
				path: 'teamBuilding/edit',
				element: <TeamBuildingEdit />,
			},
			{
				path: 'teamBuilding/1',
				element: <TeambuildingFirst />,
			},
			{
				path: 'studentManage',
				element: <StudentManage />,
			},
			{
				path: 'studentManage/student',
				element: <Student />,
			},
			{
				path: 'studentManage/student/add',
				element: <StudentAdd />,
			},
			{
				path: 'studentManage/add',
				element: <StudentManageAdd />,
			},
			{
				path: 'matchTable',
				element: <MatchTable />,
			},
			{
				path: 'matchTable/create',
				element: <MatchTableCreate />,
			},
			{
				path: 'matchTable/create/result',
				element: <MatchTableResult />,
			},
			{
				path: 'matchTable/detail',
				element: <MatchTableDetail />,
			},
			{ path: 'matchTable1', element: <MatchTableFirst /> },
			{
				path: 'matchTable2',
				element: <MatchTableResult />,
			},
		],
	},
]);

export default router;
