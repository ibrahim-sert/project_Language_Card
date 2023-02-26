import React from 'react'
import './Lang.css';
import { useState } from 'react';

const Lang = ({name,img,options}) => {
  
  const [showFlag, setShowFlag] = useState(true)

  const handleClick = () => {
    setShowFlag(!showFlag)
    setTimeout(() => setShowFlag(showFlag), 3000);
  }
  return ( <div onClick={handleClick}>
    {showFlag ? (<div className='card'>
      <img className='card-logo' src={img} alt="imıç" />
      <h4>{name}</h4>
    </div>)
  :
    (<ul className='list'>
      {options.map((item)=>{
        return(
          <li>⚽  {item}</li>
        )
      })}
      
    </ul>)} 
  </div>
    
    
  )
}

export default Lang;