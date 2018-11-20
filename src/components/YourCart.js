import React from 'react';
import './YourCart.css'

class YourCart extends React.Component {

    render() {
      const { cart } = this.props
      const renderCartItem = cart.item.map(item => (
        <div className="makeupItemCart" key={item.id}>
          <ul>
            <li><div className="CartItemName">{item.name}</div></li><br></br>
            <li><div className="CartItemPrice">${item.price}</div></li><br></br>
            <li><img className="CartItemImage" src={item.img_url} alt={item.name}/></li><br></br>
          </ul>
        </div>
      ))

      return (
        <div className="YourCartContainer">
          <h3 className="title"> Your Cart </h3>
            {renderCartItem}
          <h3 className="cart-quantity">Quantity: {cart.count}</h3>
      </div>
      )
    }
  }
export default YourCart;
