import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
import { addToCart } from '../actions/cart/cart'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
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
    console.log(this.props.cart)
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
    <label className="shopping-bag-icon-cart">
      <FontAwesomeIcon
        icon="shopping-bag"
        className="shopping-bag-icon"
        color="#8B008B"
      />
        {"  "}{this.props.cart}
      </label>
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
