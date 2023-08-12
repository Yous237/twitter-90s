import React from 'react'

import './button.css'

const Button = ({imageUrl, onClick}) => {
  return (
    <div className="button border enfoncer">
        <img src={imageUrl} onClick={onClick} alt="" />
    </div>
  )
}

export default Button