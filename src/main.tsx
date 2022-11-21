import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {persistor, store} from './app/store/store';
import {GlobalStyles} from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<GlobalStyles/>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
