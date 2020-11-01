import * as actions from '../actions/actionTypes'
const snackbar = (state = {}, action) => {
    switch (action.type) {
        case actions.SHOW_SNACKBAR:
            return {
                ...state,
                open: true,
                message: action.payload.message,
                severity: action.payload.severity,
                autoHideDuration: 6000
            };
        case actions.HIDE_SNACKBAR:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
};

export default snackbar;