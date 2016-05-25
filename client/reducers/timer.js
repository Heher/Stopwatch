function timer(state = [], action) {
  const { time } = action

  switch(action.type) {
    case 'START_CLOCK' :
      return {
        ...state,
        clockStartTime: time,
        lapStartTime: time,
        clockTime: 0,
        lapTime: 0,
        clockStarted: true
      }
    case 'STOP_CLOCK' :
      return {
        ...state,
        startTime: 0,
        clockStarted: false
      }
    case 'TICK_CLOCK' :
      return {
        ...state,
        clockTime: time - state.clockStartTime,
        lapTime: time - state.lapStartTime
      }
    case 'RESET_CLOCK' :
      return {
        ...state,
        clockStartTime: 0,
        lapStartTime: 0,
        clockTime: 0,
        lapTime: 0
      }
    case 'SET_LAP' :
      return {
        ...state,
        lapStartTime: time
      }
    default:
      return state
  }
}

export default timer