import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

const defaultState = {
  timers: {
    clockStarted: false
  },
  clock: {
    time: 0,
    startTime: 0
  },
  laps: {
    time: 0,
    startTime: 0
  },
  savedLaps: []
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : x => x
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store