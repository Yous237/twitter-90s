import React from 'react'

import './people.css'

import Pfp from '../pfp/Pfp'
import ButtonText from '../buttonText/ButtonText'

const People = ({username, name, bio, imageUrl,}) => {
  return (
    <div className="people">
        <div className="people__card border">
            <div className="people__pfp">
                <Pfp imageUrl={imageUrl}/>
            </div>
            <div className="people__right">
                <div className="people__right-upper">
                    <div className="people__right-names">
                        <h1>{name}</h1>
                        <p>@{username}</p>
                    </div>
                    <div className="people__right-follow">
                        <ButtonText text='Follow'/>
                    </div>
                </div>
                <div className="people__right-bio">
                    <p>{bio}</p>
                </div>
                
            </div>
        </div>
        

    </div>
  )
}

export default People