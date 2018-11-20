import React from 'react';
import { NavLink } from 'react-router-dom';

class MakeupCard extends React.Component  {

  handleGetReviews = event => {

    event.preventDefault();
    this.props.getReviews(this.props.makeup.id)
  }

    render() {

      const { makeup } = this.props

      return (
        <div key={makeup.id} className="MakeupCard">
          <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
          <div className="MakeupName" onClick={this.handleGetReviews}><NavLink to={`/Makeup/${makeup.id}`} style={{textDecoration: 'none'}}>{makeup.name}</NavLink></div>
          <p className="MakeupPrice"> ${makeup.price}</p>
        </div>


      )
    }
  }

export default MakeupCard
