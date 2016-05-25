import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import timer from './timer'

const rootReducer = combineReducers({timer, routing: routerReducer})

export default rootReducer