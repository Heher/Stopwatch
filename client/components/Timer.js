import React from 'react'

require('../css/timer.sass')

export default class Timer extends React.Component {

  constructor(props) {
    super(props)
  }

  addZero(time) {
    return time.length < 2 ? "0" + time : time
  }

  convertTime(time) {
    const convertedTime = new Date(time)
    const min = this.addZero(convertedTime.getMinutes().toString())
    const sec = this.addZero(convertedTime.getSeconds().toString())
    const mill = this.addZero(Math.round(convertedTime.getMilliseconds()/10).toString())

    return `${min}:${sec}:${mill}`
  }
  
  render() {
    return (
      <div className={`timer ${this.props.name}`}>
        <p>{this.convertTime(this.props.timer.time)}</p>
      </div>
    )
  }
}