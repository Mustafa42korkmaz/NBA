import React from 'react'
import logo from "../../assets/nba.png.jpg"

const Header = () => {
  return (
    <div className='header-container'>
        <img src={logo} alt="" />
        <div className='nba-title'>
            <h2>NBA</h2>
            <h2>Legends</h2>
        </div>
         
    </div>
  )
}

export default Header