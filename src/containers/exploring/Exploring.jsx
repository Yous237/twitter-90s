import React,{useState} from 'react'

import './exploring.css'

import profile from '../../assets/icons/profile.jpg'

import {Trend,ButtonText,TweetPost} from '../../component'

const Exploring = () => {
    const [tab,setTab] = useState(1)

    const handleClick = (whichTab) => {
        setTab(whichTab)
    }


  return (
    <div className="explore">
        <div className="explore__query ">
            <div className="explore__query-buttons">
                <div id='1' className={`explore__query-buttons-button ${tab === 1 ? 'border-is-active' : 'border'} enfoncer`} onClick={() => handleClick(1)} >
                    <p>Top</p>
                </div>
                <div id='2' className={`explore__query-buttons-button ${tab === 2 ? 'border-is-active' : 'border'} enfoncer`} onClick={() => handleClick(2)} >
                    <p>Latest</p>
                </div>
                <div id='3' className={`explore__query-buttons-button ${tab === 3 ? 'border-is-active' : 'border'} enfoncer`} onClick={() => handleClick(3)} >
                    <p>People</p>
                </div>
                <div id='4' className={`explore__query-buttons-button ${tab === 4 ? 'border-is-active' : 'border'} enfoncer`} onClick={() => handleClick(4)} >
                    <p>Media</p>
                </div>
            </div>
            <div className="explore__query-tweets">
                {tab === 1 &&
                <div className="explore__query-top">
                    <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="top"  />
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
                <div className="explore__query-latest">
                    <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Latest"  />
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
                <div className="explore__query-people">
                    <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="people"  />
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
                <div className="explore__query-media">
                    <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="media"  />
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
        <div className="explore__trends border">
            <h1>What's happening</h1>
            <Trend topic='Footbal' title='Zinedine Zidane' nbTweet={20}/>
            <Trend topic='England' title='Londra' nbTweet={1.7}/>
            <Trend topic='Sport' title='Galatasaray' nbTweet={23}/>
            <Trend topic='Music' title='Mettalica' nbTweet={176}/>
            <Trend topic="Series" title="Dawson's Creek" nbTweet={2}/>
            <Trend topic='Education' title='Cambridge University' nbTweet={82.2}/>
            
        </div>
        
    </div>
  )
}

export default Exploring