import React from 'react'

import './buttonText.css'

const ButtonText = ({text}) => {
  return (
    <div className="button-text border">
        <p>{text}</p>
    </div>
  )
}

export default ButtonText