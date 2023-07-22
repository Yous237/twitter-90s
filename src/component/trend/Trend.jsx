import React from 'react'

import './trend.css'

const Trend = ({topic, title, nbTweet}) => {
  return (
    <div className="trend">
      
      <p className='topic'>{topic}</p>
      <h4 className='title'>{title}</h4>
      <p className='nbTweet'>{nbTweet}K Tweet</p>
    </div>
  )
}

export default Trend