import * as actions from '../actions/actionTypes'
import {getDateOnly} from '../../services/DateTime'
const selectedDate = (state = {}, action) => {
    switch (action.type) {
        case actions.SET_DATE:
            return {
                ...state,
                date: getDateOnly(action.payload.date),
                object: action.payload.date,
            };
        default:
            return state;
    }
};

export default selectedDate;