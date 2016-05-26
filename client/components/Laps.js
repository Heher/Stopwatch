import React from 'react'

import Lap from './Lap'

export default class Laps extends React.Component {

  render() {
    const lapsList = this.props.savedLaps.map((lap, index) => {
      return <Lap {...this.props} key={index} i={index} lap={lap} />
    })
    return (
      <div className="laps">
        <h3>Laps</h3>
        <ol>
          {lapsList}
        </ol>
      </div>
    )
  }
}