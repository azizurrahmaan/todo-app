import store from 'store'

const actions = {
  set (value) {
    return store.set(this.key, value)
  },

  get () {
    return store.get(this.key)
  },

  remove () {
    return store.remove(this.key)
  }
}

const authToken = {
  key: 'auth_token',
  ...actions
}

export default { authToken }
