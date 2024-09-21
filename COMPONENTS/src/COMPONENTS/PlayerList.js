import React from 'react'

function PlayerList(props) {
  return (
    
   <div className='playersdiv'>
    <img src={props.pic }alt='' ></img>
    <h1>Name;{props.Name}</h1>
    <h1>Age;{props.Age}</h1>
    <h1>Team:{props.Team}</h1>
   </div>
  )
}

export default PlayerList
