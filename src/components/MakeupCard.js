import React from 'react';
// import MakeupItem from './MakeupItem';
import { Link } from 'react-router-dom';

class MakeupCard extends React.Component  {

    render() {
      const { makeup } = this.props
      return (
        <div key={makeup.id} className="MakeupCard">
          <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
          <div className="namePriceDescrip">
            <Link to={{pathname:`/Makeup/${makeup.id}`, state: {message: "hello, im a passed message!"}  }} >{makeup.name}</Link>
            <p> ${makeup.price}</p>
            <p> {makeup.description} </p>

         </div>
      </div>
      )
    }
  }

export default MakeupCard
