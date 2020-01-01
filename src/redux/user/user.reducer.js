//this is just a normal function that get 2 properties. It will get currentstate and action.

const INITIAL_STATE = {
    currentUser: null
};

// assigning the state value like below is a feature of ES6
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER' :
            return {
                ...state,
                currentUser : action.payload
            };

        default : 
            return state;
    }

};

export default userReducer;