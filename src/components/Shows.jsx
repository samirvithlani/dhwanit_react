import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {
  return (
    <div>
      <h1>Shows</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card' style={{width:"18rem",backgroundColor:"GrayText"}}>
              <h1>Title: money heist</h1>
              <p>Ratings 9.0</p>
              <Link to="/playcontent/moneyheist">play</Link>
            </div>
            <div className='card' style={{width:"18rem",backgroundColor:"GrayText"}}>
              <h1>Title: breaking bad</h1>
              <p>Ratings 9.0</p>
              <Link to="/playcontent/breakingbad">play</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

