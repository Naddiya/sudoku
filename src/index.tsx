import React from 'react';
import ReactDOM from 'react-dom/client';
import { unregister } from './core/service-worker/serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<div>Hello </div>
	</React.StrictMode>
);

unregister();
reportWebVitals();
