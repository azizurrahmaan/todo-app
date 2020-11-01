import store from '../Store'
import {showSnackbar} from '../actions/snackbarActions'

export default {
    success(message){
        store.dispatch(showSnackbar({message:message,severity:"success"}))
    },
    info(message){
        store.dispatch(showSnackbar({message:message,severity:"info"}))
    },
    error(message){
        store.dispatch(showSnackbar({message:message,severity:"error"}))
    }
}