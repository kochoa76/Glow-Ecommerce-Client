import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
import { addItemToCart} from '../actions/cart/cart'

import AddToCart from '../components/AddToCart'
import './makeupItem.css'
// import { Link } from 'react-router-dom';

class MakeupItem extends React.Component {

  componentDidMount() {
  this.props.getMakeup()
  }


  render() {
    console.log(this.props.cart)
  const filteredItem = this.props.makeup.filter(makeup => makeup.name.replace(/\s/g, '') === this.props.match.params.name)


  const filteredArray = filteredItem.map(makeup =>
    <div className="MakeupItemContainer" key={makeup.id}>
    <img className="MakeupItemImage" src={makeup.img_url} alt={makeup.name}/>
    <h1 className="MakeupItemName"> {makeup.name} </h1>
    <p className="MakeupItemPrice">  ${makeup.price} </p>
    <p className="MakeupItemDescription"> {makeup.description} </p>
    <AddToCart makeup={makeup} addItemToCart={this.props.addItemToCart}/>

    </div>
  )



  return (
    <div className="MakeupItemPage">
    {filteredArray}

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  makeup: state.makeup,
  cart: state.cart
  })
}


export default connect(mapStateToProps, { getMakeup, addItemToCart })(MakeupItem)
