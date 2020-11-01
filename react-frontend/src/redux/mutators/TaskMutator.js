import store from '../Store'
import {addTask, replaceTasks, clearTasks, toggleCompleteAllTasks, clearAllSelectedTasks, deleteAllSelectedTasks} from '../actions/taskActions'

export default {
  
  addTask (task) {
    store.dispatch(addTask(task))
  },

  replaceTasks (tasks) {
    store.dispatch(replaceTasks(tasks))
  },

  pullAll () {
    store.dispatch(clearTasks())
  },

  toggleCompleteAll (taskIds) {
    store.dispatch(toggleCompleteAllTasks(taskIds))
  },

  clearAllSelected () {
    store.dispatch(clearAllSelectedTasks())
  },

  deleteAll (taskIds) {
    store.dispatch(deleteAllSelectedTasks(taskIds))
  }
    
}