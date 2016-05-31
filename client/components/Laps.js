import React from 'react'

import Lap from './Lap'

export default class Laps extends React.Component {

  render() {
    const lapSetClass = this.props.savedLaps.length > 0 ? "lap-set" : ""
    const lapsList = this.props.savedLaps.map((lap, index) => {
      return <Lap {...this.props} key={index} i={index} lap={lap} />
    })
    return (
      <div className={`laps ${lapSetClass}`}>
        <table>
          <tbody>
            {lapsList}
          </tbody>
        </table>
      </div>
    )
  }
}