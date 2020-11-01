import * as actions from './actionTypes'
export const addTask = task =>  ({
    type: actions.ADD_TASK,
    payload:{
        ...task
    }
})
export const toggleSelectTask = id =>  ({
    type: actions.TOGGLE_SELECT_TASK,
    payload:{
        id
    }
})
export const toggleCompleteAllTasks = taskIds => {
    return ({
        type: actions.TOGGLE_COMPLETE_ALL_TASKS,
        payload:{
            taskIds: [...taskIds]
        }
    })
}
export const deleteAllSelectedTasks = taskIds =>  ({
    type: actions.DELETE_ALL_SELECTED_TASKS,
    payload:{
        taskIds: [...taskIds]
    }
})
export const clearAllSelectedTasks = () =>  ({
    type: actions.CLEAR_ALL_SELECTED_TASKS,
    payload:{}
})
export const replaceTasks = tasks =>  ({
    type: actions.REPLACE_TASKS,
    payload:{
        tasks
    }
})
export const clearTasks = () =>  ({
    type: actions.CLEAR_TASKS,
    payload:{}
})