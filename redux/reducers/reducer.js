import {combineReducers} from 'redux'

import toDoReducer from './toDoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  todos : toDoReducer,
  user : userReducer
})

export default rootReducer;
