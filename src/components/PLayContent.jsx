import React from 'react'
import { useParams } from 'react-router-dom'

export const PLayContent = () => {
    const name = useParams().name
  return (
    <div style={{textAlign:"center"}}>
        <h1>PLAYING..{name}</h1>
    </div>
  )
}
