import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateReviewFormData } from '../actions/reviewFormData'
import { createReviews } from '../actions/reviews'
import './ReviewForm.css'

class ReviewForm extends Component {

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createReviews(this.props.reviewFormData, this.props.makeupId)
  }

  handleOnChange= event => {
    const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {[event.target.name]: event.target.value, makeup_id: this.props.makeupId})
    this.props.updateReviewFormData(currentReviewFormData)
  }

  render() {

    const { name, city, rating, content } = this.props.reviewFormData

    return (
      <div className="review-form-container">
        <h4 className="write-a-review"> Write a Review: </h4>
        <br></br>
          <div className="review-form">
            <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="name"> Name: </label>
              <input type="text" name="name" value={name} onChange={this.handleOnChange}/><br></br>
              <br></br>
              <label htmlFor="city"> City: </label>
              <input type="text" name="city" value={city} onChange={this.handleOnChange}/><br></br>
              <br></br>
              <label htmlFor="rating"> Rating:  </label>
              <input type="number" name="rating" value={rating} onChange={this.handleOnChange}/><br></br>
              <br></br>
              <label htmlFor="content"> Your Review: </label>
              <input type="text" name="content" value={content} onChange={this.handleOnChange}/><br></br>
              <br></br><br></br>
              <button className="addReview" type="submit"> Add Review </button>
            </form>
          </div>
        </div>
      )
    }
  }

const mapStateToProps = state => {
  return ({
    reviewFormData: state.reviewFormData
  })
}

export default connect(mapStateToProps, { createReviews, updateReviewFormData })(ReviewForm)
