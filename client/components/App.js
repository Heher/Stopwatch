import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Layout from './Layout'

function mapStateToProps(state) {
  return{
    timers: state.timers,
    clock: state.clock,
    laps: state.laps,
    savedLaps: state.savedLaps
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default App