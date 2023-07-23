import React from 'react'

import './button.css'

const Button = ({imageUrl}) => {
  return (
    <div className="button border enfoncer">
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default Button