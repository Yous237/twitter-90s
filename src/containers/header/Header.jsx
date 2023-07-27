import React,{useState} from 'react'

import './header.css'

import logo from '../../assets/icons/logo.png'
import discover from '../../assets/icons/discover.svg'


import profile from '../../assets/icons/profile.jpg'

import {Button,SearchInput,Pfp} from '../../component'



import { HomePageHeader } from '../../component'

const Header = ({ mobileMenu, onMobileMenuToggle }) => {
  

  return (
    <div className="header">
      <div className="header__home">
        <div className="header__home-left">
            <img src={logo} alt="" />
            <div className="header__home-left__profile-picture">
              <div onClick={onMobileMenuToggle}>
                <Pfp imageUrl={profile} />
              </div>
                
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
    </div>
  )
}

export default Header