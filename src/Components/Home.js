import React from 'react'
import Game from './Game'
import {Link}

const Home = () => {

    const playGame = () => {
        return(
            <link rel='' ></link>
        )
    }

  return (
    <div className='homeContainer'>
      <h1 className='h1'>This is home.</h1>
      <button onClick={playGame}>PLAY</button>
    </div>
  )
}

export default Home
