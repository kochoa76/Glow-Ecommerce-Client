import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
import './makeupItem.css'
// import { Link } from 'react-router-dom';

class MakeupItem extends React.Component {

  componentDidMount() {
  this.props.getMakeup()
  }

  render() {
  const filteredItem = this.props.makeup.filter(makeup => makeup.id === parseInt(this.props.match.params.id))
  console.log(filteredItem)

  const filteredArray = filteredItem.map(makeup =>
    <div>
    <img className="MakeupItemImage" src={makeup.img_url} alt={makeup.name}/>
    <h1 className="makeupItemName"> {makeup.name} </h1>
    <p className="makeupItemPrice">  ${makeup.price} </p>
    <p className="makeupItemDescription"> {makeup.description} </p>
    </div>

  )
  return (
    <div className="makeupItemContainer">
    {filteredArray}
    </div>

    )
  }
}



const mapStateToProps = (state) => {
  return({
  makeup: state.makeup
  })
}


export default connect(mapStateToProps, { getMakeup })(MakeupItem)
