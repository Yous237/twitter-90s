import React,{useState} from 'react'

import './side.css'

import home from '../../assets/icons/home.svg'
import search from '../../assets/icons/search.svg'
import profile from '../../assets/icons/profile.svg'
import bell from '../../assets/icons/bell.svg'
import bookmark from '../../assets/icons/bookmark.svg'
import option from '../../assets/icons/option.svg'
import pfp from '../../assets/icons/profile.jpg'
import check from '../../assets/icons/check.svg'
import more from '../../assets/icons/more.svg'

import {Button, Pfp, SearchInput } from '../../component'

const Side = () => {
  const [toggleOption, setToggleOption] = useState(false)
  const [page, setPage] = useState(1)

  const handleClick = (whichPage) => {
    setPage(whichPage)
  }

  

  return (
    <div className="side ">
        <div className="side__search">
          <SearchInput/>
        </div>
        <div className='side__links '>
          <div className='side__links-link border' >
            <img src={home} alt="" />
            <a href="">Home</a>
          </div>
          <div className='side__links-link border' >
            <img src={search} alt="" />
            <a href="">Explore</a> 
          </div>
          <div className='side__links-link border' >
            <img src={profile} alt="" />
            <a href="youtube.com">Profile</a>
          </div>
          <div className='side__links-link border' >
            <img src={bell} alt="" />
            <a href="">Notifications</a>
          </div>
          <div className='side__links-link border' >
            <img src={bookmark} alt="" />
            <a href="">Bookmarks</a>
          </div>
          <div className='side__links-link border' >
            <img src={more} alt="" />
            <a href="">Option</a>
          </div>
        </div>
        <div className="side__tweet-button border enfoncer">
          <a href="#">Tweet</a>
        </div>
        
        <div className="side__profile border">
          <div className="side__profile-card">
          <div className="side__profile-card__picture">
            <Pfp imageUrl={pfp}/>
          </div>  
          <div className="side__profile-card__names">
            <p>Yous237</p>
            <p>@yousuf</p>
          </div>
          <div className="side__profile-card__button">
            {toggleOption
            ?<div onClick={() => setToggleOption(false)}><Button imageUrl={check}/></div> 
            :<div onClick={() => setToggleOption(true)}><Button imageUrl={option}/></div>
            }
            
            
          </div>
          
        </div>
        {toggleOption && (
            <div className="side__profile-card-log-out">
              <p>@erendmrv log out of account</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default Side