import * as actions from './actionTypes'
export const setToken = token =>  ({
    type: actions.SET_AUTH_TOKEN,
    payload:{
        token
    }
})
export const clearToken = () =>  ({
    type: actions.CLEAR_AUTH_TOKEN,
    payload:{}
})