import React from 'react'

import './footer.css'

import {Button} from '../../component'

import home from '../../assets/icons/home.svg'
import search from '../../assets/icons/search.svg'
import message from '../../assets/icons/message.svg'
import bell from '../../assets/icons/bell.svg'

const Footer = () => {
  return (
    <div className="footer">
        <Button imageUrl={home}/>
        <Button imageUrl={search}/>
        <Button imageUrl={bell}/>
        <Button imageUrl={message}/>
    </div>
  )
}

export default Footer