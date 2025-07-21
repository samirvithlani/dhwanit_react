import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  const movies = [
    {
      name:"chavva",
      ratings:8.0
    },
    {
      name:"bahubali",
      ratings:7.0
    },
    {
      name:"KGF",
      ratings:9.0
    },
    {
      name:"Animal",
      ratings:7.0
    }

  ]
  return (
    <div>
      <h1>Movies</h1>
      <div className='coontainer'>
        <div className='row'>
          {
            movies.map((movie)=>{
              return <div className='card' style={{width:"18rem",backgroundColor:"yellowgreen"}}>
                <h1>Title ={movie.name}</h1>
                <h2>Ratings = {movie.ratings}</h2>
                <Link to={`/playcontent/${movie.name}`}>play</Link>
              </div>
            })
          }

        </div>
      </div>
    </div>
  )
}
