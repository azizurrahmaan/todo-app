import store from '../Store'
import {showBackdrop, hideBackdrop} from '../actions/backdropActions'

export default {
    show(){
        store.dispatch(showBackdrop())
    },
    hide(){
        store.dispatch(hideBackdrop())
    },
}