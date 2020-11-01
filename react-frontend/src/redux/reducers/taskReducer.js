import * as actions from '../actions/actionTypes'
const initState = [
    
]
const tasks = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_TASK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    details: action.payload.details,
                    date: action.payload.date,
                    fromTime: action.payload.fromTime,
                    toTime: action.payload.toTime,
                    status: action.payload.status,
                }
            ]
        case actions.TOGGLE_COMPLETE_ALL_TASKS:
            return state.map( task => action.payload.taskIds.includes(task.id) ? {...task, status:(task.status === "INCOMPLETE" ? "COMPLETED" : "INCOMPLETE")} : task)
        case actions.DELETE_ALL_SELECTED_TASKS:
            return state.filter( task =>  !action.payload.taskIds.includes(task.id) )
        case actions.REPLACE_TASKS:
            return action.payload.tasks
        case actions.CLEAR_TASKS:
            return []
        default:
            return state;
    }
}

export default tasks
