import React from 'react'

import './buttonText.css'

const ButtonText = ({text, onClick, isActivate}) => {

  const buttonClass = isActivate ? 'button-text border-is-active' : 'button-text border enfoncer';


  return (
    <div className={buttonClass} onClick={onClick} >
        <p>{text}</p>
    </div>
  )
}

export default ButtonText