import * as actions from '../actions/actionTypes'
const initState = [
  
]
const selectedTaskIDs = (state = initState, action) => {
    switch (action.type) {
        case actions.TOGGLE_SELECT_TASK:{
            if(state.includes(action.payload.id)){
                return state.filter(id => id !== action.payload.id)
            }else{
                return [
                    ...state,
                    action.payload.id,
                ]
            }
        }
        case actions.CLEAR_ALL_SELECTED_TASKS:
            return []
            
        default:
            return state;
    }
}

export default selectedTaskIDs
