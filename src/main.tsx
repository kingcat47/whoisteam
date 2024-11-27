import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import './styles/global.scss';
import './styles/font.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { GoogleOAuthProvider } from '@react-oauth/google';

serviceWorkerRegistration.register();


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GoogleOAuthProvider clientId={ import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID }>
			<RouterProvider router={ router } />
		</GoogleOAuthProvider>
	</StrictMode>,
);
