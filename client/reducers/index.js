import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import timers from './timers'
import clock from './clock'
import laps from './laps'

const rootReducer = combineReducers({timers, clock, laps, routing: routerReducer})

export default rootReducer