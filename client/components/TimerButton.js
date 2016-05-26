import React from 'react'

export default class TimerButton extends React.Component {

  render() {
    return (
      <button className={this.props.type} onClick={this.props.onClick}>{this.props.type.toUpperCase()}</button>
    )
  }
} 