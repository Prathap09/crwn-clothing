
//we need to add middleware to our store to catch the actions gets fired or dispatched, we can catch them and display them.
//It will catch the actions hen do something with them and pass them to store.
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

//now we need to setup our middleware.
//the middleware that the store is expecting from us is gng to be an array.

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // ...middlewares gets all the values from logger and spread it in this function as individual arguments.

export default store;