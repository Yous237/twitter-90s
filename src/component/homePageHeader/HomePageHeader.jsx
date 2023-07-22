import React from 'react'

import logo from '../../assets/icons/logo.png'
import discover from '../../assets/icons/discover.svg'
import './homePageHeader.css'

import profile from '../../assets/icons/profile.jpg'

import Button from '../button/Button'
import SearchInput from '../search/SearchInput'
import Pfp from '../pfp/Pfp'


const HomePageHeader = () => {
  return (
    <div className="header__home">
        <div className="header__home-left">
            <img src={logo} alt="" />
            <div className="header__home-left__profile-picture">
                <Pfp imageUrl={profile}/>
            </div>
        </div>
        <div className="header__home-middle">
            <h1>Homepage</h1>
            <div className="header__home-middle-button">
                <Button imageUrl={discover}/>
            </div>
            
        </div>
        <div className="header__home-right">
            <SearchInput/>
            
        </div>
        

    </div>
  )
}

export default HomePageHeader