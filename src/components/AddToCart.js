import React from 'react'

class AddToCart extends React.Component {

    handleAddToCart = event => {
      console.log(this.props.cart)

      event.preventDefault();
      this.props.addItemToCart(this.props.makeup)
    //   if (this.props.cart.count === 0){
    //     this.props.addItemToCart(this.props.makeup)
    //   } else {
    //     if (this.props.makeup.id === this.props.cart.item.map(makeup => makeup.id).shift()) {
    //     this.props.increaseItemCount(this.props.makeup);
    //   } else {
    //     this.props.addItemToCart(this.props.makeup)
    //   }
    // }
  }


    render() {
    return (
    <button id="add-to-cart" onClick={this.handleAddToCart}> Add To Cart </button>
    )
  }
}
export default AddToCart
