import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {
    //useState
    const getMovieData = async()=>{
        const url = "http://www.omdbapi.com/?apikey=9d57be0b&s=Avatar"
        const res = await axios.get(url)
        console.log(res.data.Search)
    }
  return (
    <div>
        <h1>API DEMO 2</h1>
        <button onClick={()=>{getMovieData()}}>GET</button>
        {
            // map
        }
    </div>
  )
}
