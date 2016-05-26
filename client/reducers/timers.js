function timers(state = [], action) {
  const { time } = action

  switch(action.type) {
    case 'START_CLOCK' :
      return {
        ...state,
        clockStarted: true
      }
    case 'STOP_CLOCK' :
      return {
        ...state,
        clockStarted: false
      }
    default:
      return state
  }
}

export default timers