import React from 'react'

import './trends.css'

import Trend from '../../component/trend/Trend'

const Trends = () => {
  return (
    <div className="trends border">
      <h1>What's happening</h1>
        <Trend topic='Footbal' title='Zinedine Zidane' nbTweet={20}/>
        <Trend topic='England' title='Londra' nbTweet={1.7}/>
        <Trend topic='Sport' title='Galatasaray' nbTweet={23}/>
        <Trend topic='Music' title='Mettalica' nbTweet={176}/>
        <Trend topic="Series" title="Dawson's Creek" nbTweet={2}/>
        <Trend topic='Education' title='Cambridge University' nbTweet={82.2}/>
    </div>
  )
}

export default Trends