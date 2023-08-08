import React,{useState} from 'react'

import {ProfilePagePicture,ButtonText, ProfileTag,TweetPost} from '../../component'

import './userProfile.css'

import pfp from '../../assets/icons/profile132x132.png'
import location from '../../assets/icons/location.svg'
import calendar from '../../assets/icons/calendar.svg'
import profile from '../../assets/icons/profile.jpg'

const UserProfile = () => {
    const [tab,setTab] = useState(1)

    const handleClick = (whichTab) => {
        setTab(whichTab)
    }

  return (
    <div className='profile'>
        <div className="profile__card border">
            <div className="profile__top">
                <div className="profile__top__image">
                    <ProfilePagePicture imageUrl={pfp}/>
                </div>
                <div className="profile__top__button">
                    <ButtonText text='Edit Profile'/>
                </div>
            </div>
            <div className="profile__middle">
                <div className="profile__middle__names">
                    <h1>Eren Demir</h1>
                    <p>@erendmrv</p>
                </div> 
                <div className="profile__middle__bio">
                    <p>Front end developer at @figma</p>
                </div>
                <div className="profile__middle__tags">
                    <ProfileTag icon={location} text='France'/>
                    <ProfileTag icon={calendar} text='Joined on 12 June 2020.'/>
                </div>
                <div className="profile__middle__fll">
                    <div className="profile__middle__fll-following">
                        <p>181</p>
                        <p>Following</p>
                    </div>
                    <div className="profile__middle__fll-followers">
                        <p>321</p>
                        <p>Followers</p>
                    </div>
                </div>
                 
            </div>
            
        </div>
        <div className="profile__bottom">
                <ButtonText onClick={() => handleClick(1)} isActivate={tab === 1} text='Tweets'/>
                <ButtonText onClick={() => handleClick(2)} isActivate={tab === 2} text='Tweets and answers'/>
                <ButtonText onClick={() => handleClick(3)} isActivate={tab === 3} text='Media'/>
                <ButtonText onClick={() => handleClick(4)} isActivate={tab === 4} text='Likes'/>
            </div>
        <div className="profile__tweets">
            {tab === 1 && 
            <div id='1' className="profile__tweets-tweets">
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="tweets section"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
            </div>
            }
            {tab === 2 &&
            <div id='2' className="profile__tweets-answer">
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Answers"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
            </div>
            }
            {tab === 3 &&
            <div id='3' className="profile__tweets-media">
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Media"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
            </div>
            }
            {tab === 4 &&
            <div id='4' className="profile__tweets-likes">
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Likes"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
                <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
            </div>
            }
        </div>
    </div>
  )
}

export default UserProfile