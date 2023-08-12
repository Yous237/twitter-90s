import React from 'react'

import './exploreHeader.css'


import logo from '../../assets/icons/logo.png'
import start from '../../assets/icons/start.svg'


import profile from '../../assets/icons/profile.jpg'

import {Button,SearchInput,Pfp} from '../../component'

const ExploreHeader = ({ mobileMenu, onMobileMenuToggle }) => {
  return (
    <div className="exploreHeader">
        <div className="exploreHeader-left">
            <img src={logo} alt="" />
            <div className="exploreHeader-left__profile-picture">
              <div onClick={onMobileMenuToggle}>
                <Pfp imageUrl={profile} />
              </div>
                
            </div>
        </div>
        <div className="exploreHeader-middle">
            <SearchInput/>
            
        </div>
        <div className="exploreHeader-right">
            <Button imageUrl={start}/>
            
        </div>
    </div>
  )
}

export default ExploreHeader