//this is actual base reducer that represent all of our state in our application.
//this will combine all of our states together

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// our full state in redux is one gaint json object and these keys(user etc) represents like individual slices of the state is the cont..
// actual individual reducers that we wrote 
export default combineReducers ({

    user : userReducer,
    cart : cartReducer
    
});