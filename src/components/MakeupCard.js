import React from 'react'



class MakeupCard extends React.Component  {

  handleClick = event => {
    event.preventDefault()

  }

    render() {
      const { makeup } = this.props
      return (
        <div key={makeup.id} className="MakeupCard">
        <img className="MakeupImage" src={makeup.img_url} alt={makeup.name}/>
        <div className="namePriceDescrip">
        <h3 onClick={this.handleClick}>{makeup.name}</h3>
        <p> ${makeup.price}</p>
        <p> {makeup.description} </p>
        </div>
        </div>
      )
    }
  }

export default MakeupCard
