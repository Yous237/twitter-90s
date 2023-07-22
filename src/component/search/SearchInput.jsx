import React from 'react'

import './search.css'

import Button from '../button/Button'
import search from '../../assets/icons/search.svg'

const SearchInput = () => {
  return (
    <div className="search-input">
        <input type="text" placeholder='Search Twitter'/>
        <div className="search-input_button">
          <Button imageUrl={search}/>
        </div>
    </div>
  )
}

export default SearchInput