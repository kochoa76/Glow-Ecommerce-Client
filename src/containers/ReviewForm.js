import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateReviewFormData } from '../actions/makeupFormData'
import { createReview } from '../actions/makeup'

class ReviewForm extends Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.createReview(this.props.reviewFormData)
  }

  handleOnChange= event => {
    const { name, value } = event.target
    const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {[name]: value })
    this.props.updateReviewFormData(currentReviewFormData)
  }

  render() {
    console.log(this.props.reviewFormData)
  const { name, city, rating, content } = this.props.reviewFormData

  return (
    <div>
    Submit a Review:
    <br></br>
    <form onSubmit={this.handleOnSubmit}>
      <label htmlFor="name"> Name: </label>
      <input type="text" name="name" value={name} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="city"> City: </label>
      <input type="number" name="city" value={price} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="rating"> Rating:  </label>
      <input type="text" name="rating" value={rating} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="content"> Content: </label>
      <input type="text" name="content" value={description} onChange={this.handleOnChange}/>

      <button type="submit"> Add Review </button>
      </form>
    </div>
  )
}

}
