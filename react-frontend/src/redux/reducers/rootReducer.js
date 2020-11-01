import { combineReducers } from 'redux'
import tasks from './taskReducer'
import selectedTaskIDs from './selectedTaskReducer'
import snackbar from './snackbarReducer'
import backdrop from './backdropReducer'
import selectedDate from './selectedDateReducer'
import auth from './authReducer'
import user from './userReducer'

export default combineReducers({
    tasks,
    selectedTaskIDs,
    snackbar,
    auth,
    user,
    backdrop,
    selectedDate
})
