import React from 'react'

import './threadPost.css'

import {TweetPost, Pfp,Button, ButtonText} from '../../component'

import profile from '../../assets/icons/profile.jpg'
import more from '../../assets/icons/more.svg'
import comment from '../../assets/icons/comment.svg'
import retweet from '../../assets/icons/retweet.svg'
import like from '../../assets/icons/like.svg'
import bookmark from '../../assets/icons/bookmark.svg'
import share from '../../assets/icons/share.svg'

const ThreadPost = ({imageUrl, name, username, body}) => {
  return (
    <div className="thread">
        <div className="thread__post border">
          <div className="thread__post-top">
            <div className="thread__post-top__pfp">
              <Pfp imageUrl={profile}/>
            </div>
            <div className="thread__post-top__names">
              <h4>Yous237</h4>
              <p>@yousuf</p>
            </div>
            <div className="thread__post-top__button">
              <ButtonText text='Follow'/>
            </div>
            
          </div>
          <div className="thread__post-body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sint, aliquid minus ex voluptatibus excepturi libero doloribus, nostrum ipsa asperiores eos voluptates veniam atque, nam animi culpa? Quidem, et illo!k</p>
              <br />
              <div className="thread__post-body__date">
                <p>3:36 PM · Aug 14, 2023</p>
              </div>
              
          </div>
          <div className="thread__post-buttons">
            <Button imageUrl={comment}/>
            <Button imageUrl={retweet}/>
            <Button imageUrl={like}/>
            <Button imageUrl={bookmark}/>
            <Button imageUrl={share}/>
          </div>
        </div>
        <div className="thread__input border">
          <div className="thread__input-pfp">
            <Pfp imageUrl={profile}/>
          </div>
          <div className="thread__input-input">
            <textarea placeholder='Post your reply'></textarea>
          </div>

          <div className="thread__input-submit">
            <ButtonText text='Reply'/>
          </div>
        </div>
        
        <div className="thread__comments">
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis ipsum, earum mollitia voluptatibus nulla, quisquam esse, nemo nobis quasi provident iusto perspiciatis minima ea eligendi delectus facilis rerum aliquid?"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
          <TweetPost imageUrl={profile} name="Yous237" username="yousuf" body="Reply !!"  />
        </div>
    </div>
  )
}

export default ThreadPost