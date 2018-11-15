import React from 'react';
import { connect } from 'react-redux';

class Checkout extends React.Component {

  render() {

    const renderCheckoutItem = this.props.cart.item.map(item =>  (
      <div className="makeupItemCart" key={item.id}>
        <ul>
          <li><div className="ItemName">{item.name}</div></li><br></br>
          <li><div className="ItemPrice">${item.price}</div></li><br></br>
          <li><img className="ItemImage" src={item.img_url} alt={item.name}/></li><br></br>
        </ul>
      </div>
    ))

    return (
      <div className="checkoutContainer">
      <h1> CheckOut </h1>
        <div className="WrapperCheckout">
          <h2> Order Summary </h2>
            <div> {}
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
   {
  cart: state.cart
  }
};

export default connect(mapStateToProps)(Checkout)
