export function startClock(time) {
  return {
    type: "START_CLOCK",
    time
  }
}

export function stopClock() {
  return {
    type: "STOP_CLOCK"
  }
}

export function tickClock(time) {
  return {
    type: "TICK_CLOCK",
    time
  }
}

export function resetClock() {
  return {
    type: "RESET_CLOCK"
  }
}

export function setLap(time) {
  return {
    type: "SET_LAP",
    time
  }
}