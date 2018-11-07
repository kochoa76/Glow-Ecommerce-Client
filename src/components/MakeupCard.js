import React from 'react'

const MakeupCard = (props) => (
    <div key={props.makeup.id} className="MakeupCard">
      <img className="MakeupImage" src={props.makeup.img_url} alt={props.makeup.name}/>
      <h3>{props.makeup.name}</h3>
      <p> ${props.makeup.price}</p>
      <p> {props.makeup.description} </p>
      </div>
    )

export default MakeupCard
