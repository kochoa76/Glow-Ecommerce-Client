import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
import { addItemToCart } from '../actions/cart/cart'
import { getReviews } from '../actions/reviews'
import AddToCart from '../components/AddToCart'
import MakeupReviews from '../components/MakeupReviews'
import './MakeupItem.css'
import { NavLink } from 'react-router-dom'
import ReviewForm from '../containers/ReviewForm'
// import { Link } from 'react-router-dom';

class MakeupItem extends React.Component {

  componentDidMount() {
  this.props.getMakeup()
  }



  render() {


  const filteredItem = this.props.makeup.filter(makeup => makeup.name.replace(/\s/g, '') === this.props.match.params.name)


  const filteredArray = filteredItem.map(makeup =>
    <div className="MakeupItemContainer" key={makeup.id}>
    <img className="MakeupItemImage" src={makeup.img_url} alt={makeup.name}/>
    <h1 className="MakeupItemName"> {makeup.name} </h1>
    <p className="MakeupItemPrice">  ${makeup.price} </p>
    <p className="MakeupItemDescription"> {makeup.description} </p>
    <AddToCart cart={this.props.cart} makeup={makeup} addItemToCart={this.props.addItemToCart} />
    </div>

  )

  const reviews = this.props.reviews.map(review => <MakeupReviews key={review.id} rating={review.rating} content={review.content}/>)

  const MakeupRatings = this.props.reviews.map( review => review.rating)
  const AvgRating = MakeupRatings.length <= 1 ? null : MakeupRatings.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue) / MakeupRatings.length
  })



  return (
    <div className="MakeupItemPage">
      {filteredArray}
      <div className="ReviewsSection">
        <h2 className="review-title"> Reviews </h2>
        <div className="makeupAvgRating"> Avg Rating: {AvgRating} </div>
        <div className="ReviewContent">{reviews}</div>
        <div className="write-review"><ReviewForm /></div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  makeup: state.makeup,
  cart: state.cart,
  reviews: state.reviews
  })
}


export default connect(mapStateToProps, { getMakeup, addItemToCart, getReviews})(MakeupItem)
