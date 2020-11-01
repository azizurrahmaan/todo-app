import * as actions from './actionTypes'
export const showBackdrop = props =>  ({
    type: actions.SHOW_BACKDROP,
    payload:{
        ...props
    }
})
export const hideBackdrop = () =>  ({
    type: actions.HIDE_BACKDROP,
    payload:{}
})