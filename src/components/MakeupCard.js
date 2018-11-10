import React from 'react';
// import MakeupItem from './MakeupItem';
import { Link } from 'react-router-dom';

class MakeupCard extends React.Component  {

    render() {
      const { makeup } = this.props
      const regexMakeup = makeup.name.replace(/\s/g, '')
      
      return (
        <div key={makeup.id} className="MakeupCard">
          <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
          <div className="MakeupName"><Link to={`/Makeup/${regexMakeup}`}>{makeup.name}</Link></div>
          <div className="MakeupPrice"><p> ${makeup.price}</p></div>
          <div className="MakeupDescription"><p> {makeup.description} </p></div>
        </div>
      )
    }
  }

export default MakeupCard
