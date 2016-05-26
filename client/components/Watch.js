import React from 'react'

import Timer from './Timer'
import TimerButton from './TimerButton'

require('../css/watch.sass')
require('../css/buttons.sass')


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
          <Timer {...this.props} name="clock" timer={this.props.clock} />
          <Timer {...this.props} name="laps" timer={this.props.laps} />
        </div>
        <div className={`timer-buttons ${this.props.timers.clockStarted ? "started" : "stopped"}`}>
          <TimerButton {...this.props} onClick={this.start.bind(this)} type="start" />
          <TimerButton {...this.props} onClick={this.stop.bind(this)} type="stop" />
          <TimerButton {...this.props} onClick={this.reset.bind(this)} type="reset" />
          <TimerButton {...this.props} onClick={this.lap.bind(this)} type="lap" />
        </div>
      </div>
    )
  }
}