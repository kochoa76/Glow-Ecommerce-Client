import React from 'react'

class AddToCart extends React.Component {

    handleAddToCart = event => {

      event.preventDefault();
      this.props.addItemToCart(this.props.makeup)
  }


    render() {
    return (
    <button id="add-to-cart" onClick={this.handleAddToCart}> Add To Cart </button>
    )
  }
}
export default AddToCart
