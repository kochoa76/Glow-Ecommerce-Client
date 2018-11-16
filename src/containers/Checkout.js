import React from 'react';
import { connect } from 'react-redux';
import './Checkout.css'
import { NavLink } from 'react-router-dom';

class Checkout extends React.Component {

  constructor(){
    super()
    this.state= {
      firstName: 'Raven',
      lastName: 'Meadows',
      address: '81 Pine Street',
      city: 'Seattle',
      country: 'United States',
      cardNumber: '4321325353233235',
      shipping: 4,
      salesTax: 2,
      clicked: false
    }
  }

  handlePurchase = event =>  {
    event.preventDefault();
    this.setState({
      clicked: true
    });
  }




  render() {

    const itemPrice= this.props.cart.item.map(item => item.price).reduce((a, b) => a + b, 0)

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
      <div>
      <div className="checkoutContainer">
      <h1> Checkout </h1>
        <div className="WrapperCheckout">
          <h2 className="order-checkout-title"> Order Summary </h2>
          <div className="renderCheckoutItem">{renderCheckoutItem}</div>
          <div className="checkoutSubtotal"> SubTotal: ${itemPrice}
          <br></br><br></br>
          Shipping and Handling: ${this.state.shipping}
          <br></br><br></br>
          Sales Tax: ${this.state.salesTax}
          </div>

          <div className="order-total"> Order Total ${itemPrice + this.state.shipping + this.state.salesTax }</div>
          </div>
        <button id="purchase" type="submit"><NavLink to="/purchase" style={{textDecoration: 'none', color: 'white'}}> Purchase </NavLink></button>
      </div>


      <div className="shippingContainer">
        <h1> Shipping Information </h1>
          <div className="shipppingInfo">
            <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="firstName">First Name: </label>
              <input type="text" name="firstName" value={this.state.firstName} readOnly/>
              <br></br><br></br>
              <label htmlFor="LastName">Last Name: </label>
              <input type="text" name="name" value={this.state.lastName} readOnly/>
              <br></br><br></br>
              <label htmlFor="Address"> Address: </label>
              <input type="text" name="Address" value={this.state.address} readOnly/>
              <br></br><br></br>
              <label htmlFor="City"> City:  </label>
              <input type="text" name="city" value={this.state.city} readOnly/>
              <br></br><br></br>
              <label htmlFor="Country"> Country: </label>
              <input type="text" name="country" value={this.state.country} readOnly/>
              <br></br><br></br>
              <label htmlFor="CreditCardInfo"> Credit Card Number: </label>
              <input type="integer" name="cardnumber" value={this.state.cardNumber} readOnly/>
              <br></br><br></br>
          </form>
          </div>
        </div>

      <div className="ShippingMethod">
        <h1> Shipping Method </h1>
        <br></br><br></br>
        <form className="shippingCheckbox">
        <input name="freeGround" type="checkbox" readOnly checked/>
        <label>    Free Ground (5-7 business days) </label><br></br>
        <p className="freePrice"> $0.00 </p>
        <input name="2ndDay" type="checkbox"/>
        <label>    Second Day (3-4 business days)</label><br></br>
        <p className="freePrice"> $12.00 </p>
        <input name="NextDay" type="checkbox"/>
        <label>    Next Day Air (2-3 business days)</label><br></br>
        <p className="freePrice"> $20.00 </p>
        </form>
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
