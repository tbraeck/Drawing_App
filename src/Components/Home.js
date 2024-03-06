import React from 'react'
// import Game from './Game'
import { Link } from 'react-router-dom'

const Home = () => {



  return (
    <div className='homeContainer'>
      <h1 className='h1'>This is home.</h1>
      <Link to={`/game`} className="link">
            <button >PLAY</button>
         </Link>
    </div>
  )
}

export default Home
