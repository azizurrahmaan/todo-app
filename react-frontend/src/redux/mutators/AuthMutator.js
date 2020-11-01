import store from '../Store'
import {setToken, clearToken} from '../actions/authActions'

export default {
  
    replaceToken (token) {
      store.dispatch(setToken(token))
    },
  
    pullToken () {
      store.dispatch(clearToken())
    }
    
}