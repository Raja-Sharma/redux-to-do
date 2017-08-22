import { combineReducers } from 'redux'
import ReducerToDos from './ReducerToDos'

const rootReducer = combineReducers({
  list: ReducerToDos
})

export default rootReducer
