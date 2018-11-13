import React from 'react';
import './YourCart.css'
class YourCart extends React.Component {

    render() {
      const renderItemName= this.props.cart.item.map(item => item.makeup.name)
      const renderItemPrice = this.props.cart.item.map(item => item.makeup.price)
      const renderItemImage = this.props.cart.item.map(item => item.makeup.img_url)


      return (
      <div className="YourCartContainer">
      <div className="CartItemName">
      {renderItemName}
      </div>
      <div className="CartItemPrice">
      {renderItemPrice}
      </div>
      <div className="CartItemImage">
      {renderItemImage}
      </div>
      </div>
    )
  }
}
export default YourCart;
