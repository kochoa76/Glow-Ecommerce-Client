import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
import { addItemToCart } from '../actions/cart/cart'
import { getReviews } from '../actions/reviews'
import AddToCart from '../components/AddToCart'
import MakeupReviews from '../components/MakeupReviews'
import './MakeupItem.css'
import ReviewForm from '../containers/ReviewForm'

class MakeupItem extends React.Component {

  componentDidMount() {
  this.props.getMakeup()
  }

  render() {

  const paramsMakeupId= parseInt(this.props.match.params.id)

  const filteredItem = this.props.makeup.filter(makeup => makeup.id===paramsMakeupId)

  const filteredArray = filteredItem.map(makeup =>
    <div className="MakeupItemContainer" key={makeup.id}>
    <img className="MakeupItemImage" src={makeup.img_url} alt={makeup.name}/>
    <h1 className="MakeupItemName"> {makeup.name} </h1>
    <p className="MakeupItemPrice">  ${makeup.price} </p>
    <p className="MakeupItemDescription"> {makeup.description} </p>
    <AddToCart cart={this.props.cart} makeup={makeup} addItemToCart={this.props.addItemToCart} />
    </div>


  )

  const MakeupRatings = this.props.reviews.map( review => review.rating)
  const reviews = this.props.reviews.length === 0 ? <h3 className="noReviews">No Reviews </h3> : this.props.reviews.map(review => <MakeupReviews key={review.id} name= {review.name} city={review.city} rating={review.rating} content={review.content}/>)
  // const AvgRating = MakeupRatings.length <= 1 ? MakeupRatings : MakeupRatings.reduce(function(accumulator, currentValue) {
  //   return (accumulator + currentValue) / MakeupRatings.length
  const SumRating = MakeupRatings.length <=1 ? MakeupRatings : MakeupRatings.reduce(function(a, b) { return a + b })
  const AvgRating = SumRating / MakeupRatings.length




  return (
    <div className="MakeupItemPage">
      {filteredArray}
      <div className="ReviewsSection">
        <h2 className="review-title"> Reviews </h2><br></br>
        <div className="makeupAvgRating"> Avg Rating: {AvgRating} </div><br></br>
        {reviews}
        <div className="ReviewForm"><ReviewForm makeupId={paramsMakeupId}/></div>
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
