import React from 'react'

export default class Lap extends React.Component {
  render() {
    const { i, savedLaps, convert, lap } = this.props

    const split = i === 0 ? savedLaps[i] : (savedLaps[i] - savedLaps[i - 1])
    const negativeSplit = split < 0
    return (
      <li><span>{convert(lap)} - </span><span className={`split ${negativeSplit ? "negative" : ""}`} >{convert(split, negativeSplit)}</span></li>
    )
  }
}