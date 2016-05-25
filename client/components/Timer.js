import React from 'react'

require('../css/timer.sass')

export default class Timer extends React.Component {
  
  render() {
    return (
      <div className={`timer ${this.props.type}`}>
        <p>{this.props.type === "clock" ? this.props.timer.clockTime : this.props.timer.lapTime}</p>
      </div>
    )
  }
}