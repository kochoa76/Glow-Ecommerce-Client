import React from 'react';
import { connect } from 'react-redux';
import './Cart.css'
import { removeItemFromCart, addItemToCart } from '../actions/cart/cart'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';

library.add(faPlus, faMinus);

class Cart extends React.Component {


  render() {
    console.log(this.props.cart)
    const renderCartItem = this.props.cart.item.map(item =>  (
      <div className="makeupItemCart" key={item.makeup.id}>

        <ul>
          <li><div className="ItemName">{item.makeup.name}</div></li><br></br>
          <li><div className="ItemPrice">${item.makeup.price}</div></li><br></br>
          <li><img className="ItemImage" src={item.makeup.img_url} alt={item.makeup.name}/></li><br></br>
          <li><div className="ItemQuantity">
              <label className="minus-icon-cart"
              onClick= {() => this.props.removeItemFromCart(item.makeup)}
              ><FontAwesomeIcon
            icon="minus"
            className="minus-icon"
            color="#828282"

          /></label>{this.props.cart.count}</div></li><label className="plus-icon-cart"><FontAwesomeIcon
            icon="plus"
            className="plus-icon"
            color="#828282"
            onClick={() => this.props.addItemToCart(item.makeup)}

          /></label>
        </ul>
      </div>
    ))



    return (
      <div className="Cart">
        <div className="CartTitle">
        Your Cart
        </div>
        <div className="Product"> Product </div>
        <div className="Quantity"> Quantity </div>
        <div className="Price"> Price </div>
        <div className="Wrapper">
          <div className="CartData">{renderCartItem}</div>
        </div>
        <div className="Order-Summary">
          <h2 className="SummaryTitle"> Order Summary </h2>
          <div className="Subtotal-Shipping-Tax">
            <h4> Subtotal </h4>
            <h4> Shipping & Handling </h4>
            <h4> Sales Tax </h4>
          </div>
          <div className="OrderTotal"> Order Total </div>
          <button className="Checkout"> Checkout </button>
        </div>
      </div>


    )
  }
}

const mapStateToProps = state => {
  return ({
  cart: state.cart
  })
}
export default connect(mapStateToProps, { removeItemFromCart, addItemToCart })(Cart)
