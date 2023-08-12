import React from 'react'

import './mobileMenu.css'

import {Button, Pfp} from '../../component'
import close from '../../assets/icons/close.svg'
import pfp from '../../assets/icons/profile.jpg'
import home from '../../assets/icons/home.svg'
import search from '../../assets/icons/search.svg'
import profile from '../../assets/icons/profile.svg'
import bell from '../../assets/icons/bell.svg'
import bookmark from '../../assets/icons/bookmark.svg'
import more from '../../assets/icons/more.svg'





const MobileMenu = ({ mobileMenu, onMobileMenuToggle }) => {

  return (
    <div id='mobile-menu' className="mobile-menu border slide-in-left">
      
        <div className="mobile-menu__heading">
          <p>Account Info</p>

          <div className="mobile-menu__heading-button" onClick={onMobileMenuToggle}>
            <Button imageUrl={close}/>
          </div>
        </div>
        <div className="mobile-menu__profile-card" >
          <div className="mobile-menu__profile-card__pfp">
            <Pfp imageUrl={pfp}/>
          </div>
          <div className="mobile-menu__profile-card__names">
            <p>Eren Demir</p>
            <p>@erendmrv</p>
          </div>
          <div className="mobile-menu__profile-card__fll">
            <div className="mobile-menu__profile-card__fll-following">
              <p>181</p>
              <p>Following</p>
            </div>
            <div className="mobile-menu__profile-card__fll-followers">
              <p>321</p>
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className="mobile-menu__links">
          <div className="mobile-menu__links__link">
            <div className="mobile-menu__links__link-icon">
              <Button imageUrl={home}/>
            </div>
            <p>Home</p>
          </div>
          <div className="mobile-menu__links__link">
            <div className="mobile-menu__links__link-icon">
              <Button imageUrl={search}/>
            </div>
            <p>Search</p>
          </div>
          <div className="mobile-menu__links__link">
            <div className="mobile-menu__links__link-icon">
              <Button imageUrl={profile}/>
            </div>
            <p>Profile</p>
          </div>
          <div className="mobile-menu__links__link">
            <div className="mobile-menu__links__link-icon">
              <Button imageUrl={bell}/>
            </div>
            <p>Notification</p>
          </div>
          <div className="mobile-menu__links__link">
            <div className="mobile-menu__links__link-icon">
              <Button imageUrl={bookmark}/>
            </div>
            <p>Bookmark</p>
          </div>
          <div className="mobile-menu__links__link">
            <div className="mobile-menu__links__link-icon">
              <Button imageUrl={more}/>
            </div>
            <p>Option</p>
          </div>
        </div>
        <div className="mobile-menu__log-out">
          <p>Log out</p>
        </div>

    </div>
  )
}

export default MobileMenu