import React from 'react'

const MakeupCard = ({makeup}) => (
    <div key={makeup.id} className="MakeUpCard">
      <h2><strong> {makeup.name}</strong></h2>
      <p> ${makeup.price}</p>
      <p> {makeup.description} </p>
      <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
    </div>
  )
export default MakeupCard
