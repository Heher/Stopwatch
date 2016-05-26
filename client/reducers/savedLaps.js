function savedLaps(state = [], action) {
  const { time, lapStartTime } = action

  switch(action.type) {
    case 'SET_LAP' :
      return [
        ...state,
        time - lapStartTime
      ]
    case 'RESET_CLOCK' :
      return []
    default:
      return state
  }
}

export default savedLaps