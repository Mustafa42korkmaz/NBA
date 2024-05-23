import React, { useState } from 'react'

const Card = ({item}) => {
  const {name, img, statistics} = item
  const [showStatistics, setShowStatistics] = useState(true)
  
  return (
    <div className='card-container' onClick={() => setShowStatistics(!showStatistics)}>
      {showStatistics ? (
        <div>
          <img src={img} alt="" className='card-player'/>
          <h4>{name}</h4>
        </div>

      ) : (
        
        <ul className='list'>
          {statistics.map((statistic, i) => {
            return <li key={i}>{statistic}</li>
          })}
        </ul>
        )}

      

    </div>
  )
}

export default Card