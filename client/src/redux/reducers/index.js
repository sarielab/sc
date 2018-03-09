/*reducer*/
import { combineReducers } from 'redux'
import { weightReducer } from './weightReducer'

const rootReducer = combineReducers({
  weightData: weightReducer
})

export default rootReducer