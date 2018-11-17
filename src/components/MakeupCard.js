import React from 'react';
// import MakeupItem from './MakeupItem';
import { NavLink } from 'react-router-dom';




class MakeupCard extends React.Component  {

  handleGetReviews = event => {

    event.preventDefault();
    this.props.getReviews(this.props.makeup.id)
  }

    render() {
      console.log(this.props.reviews)
      const { makeup } = this.props
      const regexMakeup = makeup.name.replace(/\s/g, '')

      return (
        <div key={makeup.id} className="MakeupCard">
          <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
          <button className="MakeupName" onClick={this.handleGetReviews}><NavLink to={`/Makeup/${regexMakeup}`} style={{textDecoration: 'none'}}>{makeup.name}</NavLink></button>
          <div className="MakeupPrice"><p> ${makeup.price}</p></div>
        </div>
      )
    }
  }

export default MakeupCard
