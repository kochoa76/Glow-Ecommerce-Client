import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {



  render() {

    return (
      <div>Cart Page</div> )
  }
}

const mapStateToProps = state => {
  return ({
  cart: state.cart
  })
}
export default connect(mapStateToProps)(Cart)
