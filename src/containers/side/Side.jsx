import React from 'react'

import './side.css'

import home from '../../assets/icons/home.svg'
import search from '../../assets/icons/search.svg'
import profile from '../../assets/icons/profile.svg'
import bell from '../../assets/icons/bell.svg'
import bookmark from '../../assets/icons/bookmark.svg'
import option from '../../assets/icons/option.svg'
import pfp from '../../assets/icons/profile.jpg'

import {Button, Pfp } from '../../component'

const Side = () => {
  return (
    <div className="side ">
        <div className='side__links '>
          <div className='side__links-link border-is-active'>
            <img src={home} alt="" />
            <a href="">Home</a>
          </div>
          <div className='side__links-link border'>
            <img src={search} alt="" />
            <a href="">Explore</a> 
          </div>
          <div className='side__links-link border'>
            <img src={profile} alt="" />
            <a href="">Profile</a>
          </div>
          <div className='side__links-link border'>
            <img src={bell} alt="" />
            <a href="">Notifications</a>
          </div>
          <div className='side__links-link border'>
            <img src={bookmark} alt="" />
            <a href="">Bookmarks</a>
          </div>
        </div>
        <div className="side__tweet-button border enfoncer">
          <a href="#">Tweet</a>
        </div>
        <div className="side__profile-card border">
          <div className="side__profile-card__picture">
            <Pfp imageUrl={pfp}/>
          </div>  
          <div className="side__profile-card__names">
            <p>Yous237</p>
            <p>@yousuf</p>
          </div>
          <div className="side__profile-card__button">
            <Button imageUrl={option}/>
          </div>
        </div>
    </div>
  )
}

export default Side