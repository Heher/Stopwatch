import React from 'react'

export default class Lap extends React.Component {
  render() {
    return (
      <li>{this.props.convert(this.props.lap)}</li>
    )
  }
}