import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { Provider } from 'react-redux'
import store, { history } from './store'

import App from "./components/App"
import Watch from "./components/Watch"

require('./css/index.sass')

const router = (
  <Provider store={store}>
    <App />
  </Provider>
)

const app = document.getElementById('app')

render(router, app)