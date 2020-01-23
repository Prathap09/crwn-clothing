import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden
            };
        case CartActionTypes.ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload) //we are spreading in all the array values(already existing in cart if any) and adding the payload(when we click add to cart these items will be in payload)
            };
        case CartActionTypes.REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART :
            return {
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) //we are filtering out the cartitems array that matches the item we want to delete and return new array without that item. 
            };
        default:
            return state;
    }
}

export default cartReducer;