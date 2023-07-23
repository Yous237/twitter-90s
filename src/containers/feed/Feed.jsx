import React from 'react'

import './feed.css'

import profile from '../../assets/icons/profile.jpg'

import {TweetInput, TweetPost} from '../../component'

const Feed = () => {
  return (
    <div className="feed">
        <TweetInput/>
        <div className="feed__tweets">
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
          {/* <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Hello Twitter"  /> */}
        </div>
    </div>
  )
}

export default Feed