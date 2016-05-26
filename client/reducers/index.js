import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import timers from './timers'
import clock from './clock'
import laps from './laps'
import savedLaps from './savedLaps'

const rootReducer = combineReducers({timers, clock, laps, savedLaps, routing: routerReducer})

export default rootReducer