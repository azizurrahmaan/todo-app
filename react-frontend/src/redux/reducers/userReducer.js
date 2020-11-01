import * as actions from '../actions/actionTypes'
const auth = (state = {}, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                ...state,
                ...action.payload.user,
            };
        case actions.CLEAR_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default auth;