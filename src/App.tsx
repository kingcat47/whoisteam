import { BackButton, BottomBar } from './components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from "react";
import styles from './App.module.scss';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import useFileStore from './stores/fileStore.ts';
import { getFiles } from './api/files.ts';

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const loginpage = location.pathname != '/login';

	const { setIsLoading, setFiles } = useFileStore((state) => state);

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');

		if (accessToken) {
			setIsLoading(true);

			getFiles()
				.then((response) => {
					setFiles(response);
					setIsLoading(false);
				});


		} else {
			// navigate('/login');
		}
	}, []);

	return (
		<div className={ styles.container }>
			<Outlet />
			{ loginpage && <BottomBar /> }
			{ loginpage && <BackButton /> }
		</div>
	);
}

export default App;
