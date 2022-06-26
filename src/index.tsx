import React from 'react';
import ReactDOM from 'react-dom/client';
import { unregister } from './core/service-worker/serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div>Hello </div>
		</ThemeProvider>
	</React.StrictMode>
);

unregister();
reportWebVitals();
