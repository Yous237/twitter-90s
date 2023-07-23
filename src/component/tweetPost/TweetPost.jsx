import React from 'react'

import './tweetPost.css'



import retweet from '../../assets/icons/retweet.svg'
import comment from '../../assets/icons/comment.svg'
import like from '../../assets/icons/like.svg'
import share from '../../assets/icons/share.svg'

import Pfp from '../pfp/Pfp'
import Button from '../button/Button'

const TweetPost = ({imageUrl, name, username, body}) => {
  return (
    <div className="tweet-post border">
        <div className="tweet-post__profile-picture">
            <Pfp imageUrl={imageUrl}/>
        </div>
        <div className="tweet-post__right">
            <div className="tweet-post__right-names">
                <p>{name}</p>
                <p>@{username}</p>
            </div>
            <div className="tweet-post__right-body">
                <p>{body}</p>
            </div>
            <div className="tweet-post__right-buttons">
                <Button imageUrl={comment}/>
                <Button imageUrl={retweet}/>
                <Button imageUrl={like}/>
                <Button imageUrl={share}/>
            </div>
        </div>

    </div>
  )
}

export default TweetPost