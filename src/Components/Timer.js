import { useState } from 'react'

const Timer = () => {
    const [timer, setTimer] =useState("00:00:00")

    const getTimeRemaining = (e) => {
        const total = 
        const seconds = Math.floor((total / 1000) % 60);

    }
  return (
    <div className='timer'>
      
    </div>
  )
}

export default Timer
