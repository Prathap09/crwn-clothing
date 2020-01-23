//this is actual base reducer that represent all of our state in our application.
//this will combine all of our states together

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// our full state in redux is one gaint json object and these keys(user etc) represents like individual slices of the state is the cont..
// actual individual reducers that we wrote 

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}


const rootReducer = combineReducers ({

    user : userReducer,
    cart : cartReducer
    
});

export default persistReducer(persistConfig, rootReducer);