import Http from './Http'

export default {
  add (data) {
    return Http.post('tasks/api/add-task', data)
  },

  fetch (data) {
    return Http.get('tasks/api/search-tasks/' + data)
  },

  toggleCompleteAll (payload) {
    return Http.put('tasks/api/toggle-tasks', payload)
  },
  deleteAll (payload) {
    return Http.post('tasks/api/delete-tasks', payload)
  },

}
