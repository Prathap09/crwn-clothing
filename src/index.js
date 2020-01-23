import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //this provider is a component that we want to wrap our entire application. Because we want everything inside this to have access to provider
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import './index.css';
import App from './App';



ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <PersistGate persistor = {persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,    
    document.getElementById('root')

);


