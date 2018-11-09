import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
import { addToCart } from '../actions/cart/cart'
import { Fashoppingbag } from 'react-icons/fa'
import './makeupItem.css'
// import { Link } from 'react-router-dom';

class MakeupItem extends React.Component {

  componentDidMount() {
  this.props.getMakeup()
  }

  handleAddToCart = e => {
    e.preventDefault();
    this.props.addToCart(this.props.cart)
  }

  render() {
  const filteredItem = this.props.makeup.filter(makeup => makeup.name.replace(/\s/g, '') === this.props.match.params.name)


  const filteredArray = filteredItem.map(makeup =>
    <div className="MakeupItemContainer" key={makeup.id}>
    <img className="MakeupItemImage" src={makeup.img_url} alt={makeup.name}/>
    <h1 className="MakeupItemName"> {makeup.name} </h1>
    <p className="MakeupItemPrice">  ${makeup.price} </p>
    <p className="MakeupItemDescription"> {makeup.description} </p>
    </div>
  )


  return (
    <div className="MakeupItemPage">
    <h3> < Fashoppingbag/> </h3>
    {filteredArray}
    <button id="add-to-cart" onClick={this.handleAddToCart}> Add To Cart </button>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  makeup: state.makeup,
  cart: state.cart
  })
}


export default connect(mapStateToProps, { getMakeup, addToCart })(MakeupItem)
