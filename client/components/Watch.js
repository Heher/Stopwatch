import React from 'react'

import Timer from './Timer'
import TimerButton from './TimerButton'
import Laps from './Laps'

require('../css/watch.sass')
require('../css/buttons.sass')
require('../css/laps.sass')


export default class Watch extends React.Component {

  constructor(props) {
    super(props)
  }

  clockStarted() {
    return this.props.timers.clockStarted ? "started" : "stopped"
  }

  start() {
    this.props.startClock(Date.now())
    this.interval = setInterval(() =>
      this.tick()
    , 1)
  }

  tick() {
    this.props.tickClock(Date.now())
  }

  stop() {
    this.props.stopClock()
    this.lap()
    this.interval = clearInterval(this.interval)
  }

  reset() {
    this.props.resetClock()
  }

  lap() {
    this.props.setLap(Date.now(), this.props.laps.startTime)
  }

  addZero(time) {
    return time.length < 2 ? "0" + time : time
  }

  convertTime(time, negative = false) {
    time = negative ? Math.abs(time) : time
    const convertedTime = new Date(time)
    const min = this.addZero(convertedTime.getMinutes().toString())
    const sec = this.addZero(convertedTime.getSeconds().toString())
    const mill = this.addZero(Math.floor(convertedTime.getMilliseconds()/10).toString())

    return negative ? `-${min}:${sec}:${mill}` : `${min}:${sec}:${mill}`
  }
  
  render() {
    return (
      <div className="watch">
        <div className="controls">
          <div className="timers">
            <Timer {...this.props} name="Clock" timer={this.props.clock} convert={this.convertTime.bind(this)}/>
            <Timer {...this.props} name="Laps" timer={this.props.laps} convert={this.convertTime.bind(this)}/>
          </div>
          <div className={`timer-buttons ${this.clockStarted()}`}>
            <TimerButton {...this.props} onClick={this.start.bind(this)} type="start" />
            <TimerButton {...this.props} onClick={this.stop.bind(this)} type="stop" />
            <TimerButton {...this.props} onClick={this.reset.bind(this)} type="reset" />
            <TimerButton {...this.props} onClick={this.lap.bind(this)} type="lap" />
          </div>
        </div>
        <Laps {...this.props} convert={this.convertTime.bind(this)}/>
      </div>
    )
  }
}