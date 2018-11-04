import React from 'react'
import './Makeup.css'
const Makeup = (props) => (
  <div>
    <h1>Makeup </h1>
    {props.makeup.map(makeup =>
      <div key={makeup.id} className="MakeUpCard">
      <h2><strong> {makeup.name}</strong></h2>
      <p> Price: ${makeup.price}</p>
      <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
      <p> Description: {makeup.description} </p>
      </div>
    )}
  </div>
)
export default Makeup
