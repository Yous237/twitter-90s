import { useState } from 'react'

import './App.css'

import {Header, Feed, Side, Trends, Footer} from './containers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="heading">
        <Header/>
      </div>
      <div className="container">
        <Side/>
        <Feed/>
        <Trends/>
        <Footer/>
      </div>


    </div>
  )
}

export default App
