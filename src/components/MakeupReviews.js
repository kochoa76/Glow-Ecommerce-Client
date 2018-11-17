import React from 'react';
import './MakeupItem.css'
const MakeupReviews = (props) => (

  <div className="review-info">
     <div className="review-rating">{props.rating}<br></br><br></br></div>
   <h4 className="review-name-city">{props.name} from {props.city}: </h4>
     <h4 className="review-content">"{props.content}"</h4>
     </div>
   )


export default MakeupReviews
