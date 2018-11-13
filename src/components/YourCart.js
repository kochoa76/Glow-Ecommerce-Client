import React from 'react';
import './YourCart.css'
class YourCart extends React.Component {

    render() {

      const renderCartItem = this.props.cart.item.map(item => (
        <div className="makeupItemCart" key={item.makeup.id}>
          <ul>
            <li><div className="CartItemName">{item.makeup.name}</div></li><br></br>
            <li><div className="CartItemPrice">${item.makeup.price}</div></li><br></br>
            <li><img className="CartItemImage" src={item.makeup.img_url} alt={item.makeup.name}/></li><br></br>
            <li><h3>Quantity: {this.props.cart.count}</h3></li>
          </ul>
        </div>
      ))

      return (
      <div className="YourCartContainer">
      <h3 className="title"> Your Cart </h3>
      {renderCartItem}
      </div>
    )
  }
}
export default YourCart;
