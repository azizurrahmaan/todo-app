import Http from './Http'

export default {
  login (data) {
    return Http.post('users/api/login', data)
  },

  logout () {
    return Http.post('users/api/logout')
  },

  register (data) {
    return Http.post('users/api/register', data)
  },

  user () {
    return Http.get('users/api/user' )
  },

}
