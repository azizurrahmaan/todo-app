import * as actions from './actionTypes'
export const setSelectedDate = date =>  ({
    type: actions.SET_DATE,
    payload:{
        date
    }
})