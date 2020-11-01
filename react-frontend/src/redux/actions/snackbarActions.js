import * as actions from './actionTypes'
export const showSnackbar = props =>  ({
    type: actions.SHOW_SNACKBAR,
    payload:{
        ...props
    }
})
export const hideSnackbar = () =>  ({
    type: actions.HIDE_SNACKBAR,
    payload:{}
})