import store from '../Store'
import {setSelectedDate} from '../actions/selectedDateActions'

export default {
    setDate(date){
        store.dispatch(setSelectedDate(date))
    }
}