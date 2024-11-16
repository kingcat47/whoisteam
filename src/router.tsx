import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { TeamBuilding } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'teamBuilding',
				element: <TeamBuilding />,
			},
			{
				path: 'studentManage',
				element: <h1>학생 관리</h1>,
			},
			{
				path: 'matchTable',
				element: <h1>대진표</h1>,
			},
			//   {
			//     path: "",
			//     element: <MenuLayout></MenuLayout>,
			//     children: [
			//       {
			//         path: "",
			//         element: <TodayWord />,
			//       },
			//       {
			//         path: "voca",
			//         element: <Voca />,
			//       },
			//       {
			//         path: "more",
			//         element: <More />,
			//       },
			//     ],
			//   },
		],
	},
]);

export default router;
