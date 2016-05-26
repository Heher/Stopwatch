function laps(state = [], action) {
  const { time } = action

  switch(action.type) {
    case 'START_CLOCK' :
      return {
        ...state,
        startTime: time,
        time: 0
      }
    case 'TICK_CLOCK' :
      return {
        ...state,
        time: time - state.startTime
      }
    case 'SET_LAP' :
      return {
        ...state,
        startTime: time
      }
    case 'RESET_CLOCK' :
      return {
        ...state,
        startTime: 0,
        time: 0
      }
    default:
      return state
  }
}

export default laps