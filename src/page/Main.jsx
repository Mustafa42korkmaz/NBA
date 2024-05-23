import React, { useState } from 'react'
import {data} from "../helper/data.js"
import Card from '../components/card/Card.jsx'

const Main = () => {
  const [search, setSearch] = useState("")

  return (
    <>
      <div className='search-container'>
      <input 
      type="text" 
      className='search' 
      placeholder='search player...'
      onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    
    <div className='main-container'>
      {data.filter((player) => player.name.toLowerCase().includes(search.trim().toLowerCase()) )
      .map((item ,i) => {
          return <Card item={item} key={i}/>
        })}
      </div>
    </>  
  )
}

export default Main