import React from 'react'
import '../css/GameStart.css'

const GameStart = () => {
  return (
    <div>
      <div className='main'>
        <img className='character' src={`/images/character.png`}></img>
        <img className='closet' src={`/images/closet-close.png`}></img>
      </div>
    </div>
  )
}

export default GameStart
