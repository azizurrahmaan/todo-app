import store from '../Store'
import {setUser, clearUser} from '../actions/userActions'

export default {
  
    replaceUser (user) {
      store.dispatch(setUser(user))
    },
  
    pullUser () {
        store.dispatch(clearUser())
    }
}