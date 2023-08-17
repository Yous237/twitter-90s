import React,{useState} from 'react'


import {Header,Side,ThreadPost,Trends,Footer,MobileMenu} from '../../containers'

const Thread = () => {
    const [mobileMenu, setMobileMenu] = useState(false);


    const handleMobileMenuToggle = () => {
      if (mobileMenu) {
        const element = document.getElementById('mobile-menu')
          
        element.classList.remove('slide-in-left');
        element.classList.add('slide-out-left');
        setTimeout(()=>{
          
          setMobileMenu(!mobileMenu)
          element.classList.add('slide-in-left')
        },500)
  
        
      }else {
        
        // const element = document.getElementById('mobile-menu')
        // if (element.classList.contains('slide-out-left')) {
        //   element.classList.remove('slide-in-left');
        //   element.classList.add('slide-in-left');
          
        // }
  
        setMobileMenu(!mobileMenu)
      }
    };
    return (
      <div className="">
        <div className="heading">
          
          <Header mobileMenu={mobileMenu} onMobileMenuToggle={handleMobileMenuToggle} />
        </div>
        <div className="container">
          <Side/>
          {mobileMenu && (<MobileMenu mobileMenu={mobileMenu} onMobileMenuToggle={handleMobileMenuToggle}/>)}

          
          <ThreadPost/>
          <Trends/>
          <Footer/>
        </div>
      </div>
    )
}

export default Thread