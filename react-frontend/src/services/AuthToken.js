import Cookie from './Cookie'
import LocalStorage from './LocalStorage'
import AuthMutator from '../redux/mutators/AuthMutator'
import store from '../redux/Store'

export default {
  tokenInCookie () {
      return Cookie.authToken.get()
  },
  tokenInLocalStorage () {
      return LocalStorage.authToken.get()
  },
  token(){
    return store.getState().auth.token || Cookie.authToken.get() || LocalStorage.authToken.get()
  },

  has(){
    return this.token()?true:false
  },

  remove () {
    AuthMutator.pullToken()
    Cookie.authToken.remove()
    LocalStorage.authToken.remove()
  }
}
