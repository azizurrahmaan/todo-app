import { get } from 'react-hook-form'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)
export default store