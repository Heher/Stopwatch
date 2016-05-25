import React from 'react'

import Timer from './Timer'
import TimerButton from './TimerButton'

require('../css/watch.sass')


export default class Watch extends React.Component {

  constructor(props) {
    super(props)
  }

  start() {
    this.props.startClock(Date.now())
    this.interval = setInterval(() =>
      this.tick()
    )
  }

  tick() {
    this.props.tickClock(Date.now())
  }

  stop() {
    this.props.stopClock()
    this.interval = clearInterval(this.interval)
  }

  reset() {
    this.props.resetClock()
  }

  lap() {
    this.props.setLap(Date.now())
  }
  
  render() {
    return (
      <div className="watch">
        <h1>Watch</h1>
        <div className="timers">
          <Timer {...this.props} type="clock" />
          <Timer {...this.props} type="laps" />
        </div>
        <div className="timer-buttons">
          <TimerButton onClick={this.start.bind(this)} text="Start" />
          <TimerButton onClick={this.stop.bind(this)} text="Stop" />
          <TimerButton onClick={this.reset.bind(this)} text="Reset" />
          <TimerButton onClick={this.lap.bind(this)} text="Lap" />
        </div>
      </div>
    )
  }
}