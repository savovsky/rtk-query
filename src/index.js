/* istanbul ignore file */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import '@miro/fel-font-faces/avenir';
import '@miro/fel-font-faces/montserratV2';
import '@miro/fel-ui/build/styles.css';
import './scss/index.scss';

// import setSessionStorageForLocalDev from './utils/setSessionStorageForLocalDev';
import { store } from './store';
import App from './components/App';

// setSessionStorageForLocalDev();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('react-root'));
