import * as actions from '../actions/actionTypes'
const backdrop = (state = {open:false}, action) => {
    switch (action.type) {
        case actions.SHOW_BACKDROP:
            return {
                ...state,
                open: true,
            };
        case actions.HIDE_BACKDROP:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
};

export default backdrop;