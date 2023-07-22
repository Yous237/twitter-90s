import React from 'react'

import './tweetInput.css'

import profile from '../../assets/icons/profile.jpg'

import media from '../../assets/icons/media.svg'
import gif from '../../assets/icons/gif.svg'
import emoji from '../../assets/icons/emoji.svg'
import location from '../../assets/icons/location.svg'

import Pfp from '../pfp/Pfp'
import Button from '../button/Button'
import ButtonText from '../buttonText/ButtonText'

const TweetInput = () => {
  return (
    <div className="tweet-input border">
        <div className="tweet-input__profile-picture">
            <Pfp imageUrl={profile}/>
        </div>
        <div className="tweet-input__right">
            <div className="tweet-input__right-input">
                {/* <input type="text" placeholder="What's Happening?!"/> */}
                <textarea placeholder="What's Happening"></textarea>
            </div>

            <div className="tweet-input__right-buttons">
                <div className="tweet-input__right-buttons-left">
                    <Button imageUrl={media}/>
                    <Button imageUrl={gif}/>
                    <Button imageUrl={emoji}/>
                    <Button imageUrl={location}/>
                </div>
                <div className="tweet-input__right-buttons-right">
                    <ButtonText text='Tweet'/>
                </div>

            </div>
        </div>


        
    </div>
  )
}

export default TweetInput