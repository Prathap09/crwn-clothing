
//we need to add middleware to our store to catch the actions gets fired or dispatched, we can catch them and display them.
//It will catch the actions hen do something with them and pass them to store.
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';



const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // ...middlewares gets all the values from logger and spread it in this function as individual arguments.

export const persistor = persistStore(store);
