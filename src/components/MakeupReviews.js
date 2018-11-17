import React from 'react';

const MakeupReviews = (props) => (

    <div className="review-info">
    {props.rating}
    <h4>{props.content}</h4>
    </div>


  )

export default MakeupReviews
