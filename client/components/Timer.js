import React from 'react'

require('../css/timer.sass')

export default class Timer extends React.Component {
  
  render() {
    return (
      <div className="timer">
        <p>{this.props.name}</p>
        <p className="time">{this.props.convert(this.props.timer.time)}</p>
      </div>
    )
  }
}