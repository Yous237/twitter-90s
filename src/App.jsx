import { useState } from 'react'

import './App.css'

import {Header, Feed, Side, Trends, Footer, MobileMenu} from './containers'


function App() {
  const [mobileMenu, setMobileMenu] = useState(false);


  const handleMobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  

  return (
    <div className='App'>
      <div className="heading">
        
        <Header mobileMenu={mobileMenu} onMobileMenuToggle={handleMobileMenuToggle} />
      </div>
      <div className="container">
        <Side/>
        {mobileMenu && (<MobileMenu mobileMenu={mobileMenu} onMobileMenuToggle={handleMobileMenuToggle}/>)}
        <Feed/>
        
        <Trends/>
        <Footer/>
      </div>


    </div>
  )
}

export default App
