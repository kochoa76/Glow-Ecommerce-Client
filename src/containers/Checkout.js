import React from 'react';
import { connect } from 'react-redux';
import './Checkout.css'

class Checkout extends React.Component {

  render() {
    console.log(this.props.cart)
    const renderCheckoutItem = this.props.cart.item.map(item =>  (
      <div className="CheckoutItemCart" key={item.id}>
        <ul>
          <li><div className="CheckoutItemName">{item.name}</div></li><br></br>
          <li><div className="CheckoutItemPrice">${item.price}</div></li><br></br>
          <li><div className="CheckoutItemQuantity"> Qty: {this.props.cart.item.filter(product => product.id === item.id).length} </div></li>
        </ul>
      </div>
    ))

    return (
      <div className="checkoutContainer">
      <h1> Checkout </h1>
        <div className="WrapperCheckout">
        <h2 className="order-checkout-title"> Order Summary </h2>
        <div className="renderCheckoutItem">{renderCheckoutItem}</div>
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
export default connect(mapStateToProps)(Checkout)
