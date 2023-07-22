import React from 'react'

import './button.css'

const Button = ({imageUrl}) => {
  return (
    <div className="button border">
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default Button