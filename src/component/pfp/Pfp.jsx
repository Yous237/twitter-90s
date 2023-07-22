import React from 'react'

import './pfp.css'

const Pfp = ({imageUrl}) => {
  return (
    <div className="pfp">
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default Pfp