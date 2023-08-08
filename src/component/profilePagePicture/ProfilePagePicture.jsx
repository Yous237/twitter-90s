import React from 'react'

import './profilePagePicture.css'

const ProfilePagePicture = ({imageUrl}) => {
  return (
    <div className="profilePagePicture">

            <img className='profilePagePicture-img' src={imageUrl} alt=""  />

        
    </div>
  )
}

export default ProfilePagePicture