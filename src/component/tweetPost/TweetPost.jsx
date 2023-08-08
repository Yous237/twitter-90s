import React, {useEffect, useRef} from 'react'

import './tweetPost.css'



import retweet from '../../assets/icons/retweet.svg'
import comment from '../../assets/icons/comment.svg'
import like from '../../assets/icons/like.svg'
import share from '../../assets/icons/share.svg'

import Pfp from '../pfp/Pfp'
import Button from '../button/Button'

const TweetPost = ({imageUrl, name, username, body}) => {

    const containerRef = useRef(null);

    // useEffect(() => {
    //   const container = containerRef.current;
    //   const pTag = container.querySelector('p');
    //   const isOverflowing = pTag.scrollWidth > container.clientWidth;
  
    //   if (isOverflowing) {
    //     pTag.style.textDecoration = 'underline';
    //   } else {
    //     pTag.style.textDecoration = 'none';
    //   }
    // }, []);


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
                {/* <textarea name="" id="" cols="35" rows="3">{body}</textarea> */}
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