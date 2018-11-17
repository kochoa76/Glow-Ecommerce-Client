import React from 'react';
import { connect } from 'react-redux';
import './Cart.css'
import { removeItemFromCart, addItemToCart } from '../actions/cart/cart'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';


library.add(faPlus, faMinus);

class Cart extends React.Component {


  render() {
    const renderCartItem = this.props.cart.item.map(item =>  (
      <div className="makeupItemCart" key={item.id}>
        <ul>
          <li><div className="ItemName">{item.name}</div></li><br></br>
          <li><div className="ItemPrice">${item.price}</div></li><br></br>
          <li><img className="ItemImage" src={item.img_url} alt={item.name}/></li><br></br>
          <li><div className="ItemQuantity">
              <label className="minus-icon-cart"
              onClick= {() => this.props.removeItemFromCart(item)}
              ><FontAwesomeIcon
            icon="minus"
            className="minus-icon"
            color="#828282"

          /></label>{this.props.cart.item.filter(product => product.id === item.id).length}</div></li><label className="plus-icon-cart"><FontAwesomeIcon
            icon="plus"
            className="plus-icon"
            color="#828282"
            onClick={() => this.props.addItemToCart(item)}

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
            <h4> Subtotal: ${this.props.cart.item.map(item => item.price).reduce((a, b) => a + b, 0)}</h4>
            <h4> Shipping & Handling:     -- </h4>
            <h4> Sales Tax:    -- </h4>
          </div>
          <div className="OrderTotal"> Order Total: ${this.props.cart.item.map(item => item.price).reduce((a, b) => a + b, 0)}</div><br></br>
          <h2 className="Checkout"><NavLink to='/checkout' style={{textDecoration: 'none', color: 'white'}}> Checkout </NavLink></h2>

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
