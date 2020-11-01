import * as actions from '../actions/actionTypes'
const auth = (state = {}, action) => {
    switch (action.type) {
        case actions.SET_AUTH_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            };
        case actions.CLEAR_AUTH_TOKEN:
            return {
                ...state,
                token: null,
            };
        default:
            return state;
    }
};

export default auth;