import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import './styles/global.scss';
import './styles/font.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={ router } />
	</StrictMode>,
);
