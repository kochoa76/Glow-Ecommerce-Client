import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateReviewFormData } from '../actions/reviewFormData'
import { createReviews } from '../actions/reviews'
import './ReviewForm.css'

class ReviewForm extends Component {

  constructor(props){
    super(props)
      this.state= {
        makeupId: this.props.makeupId
      }
    }


  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.createReviews(this.props.reviewFormData, this.props.makeupId))
  }

  handleOnChange= event => {
    const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {[event.target.name]: event.target.value })
    this.props.updateReviewFormData(currentReviewFormData)
  }

  render() {
    console.log(this.props.reviewFormData)

  const { name, city, rating, content } = this.props.reviewFormData

  return (
    <div className="review-form-container">
    Submit a Review:
    <br></br>
    <form onSubmit={this.handleOnSubmit}>
      <label htmlFor="makeupId"> MakeupId: </label>
      <input type="number" name="makeupId" value={this.state.makeupId} onChange={this.handleOnChange} />
      <label htmlFor="name"> Name: </label>
      <input type="text" name="name" value={name} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="city"> City: </label>
      <input type="text" name="city" value={city} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="rating"> Rating:  </label>
      <input type="number" name="rating" value={rating} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="content"> Content: </label>
      <input type="text" name="content" value={content} onChange={this.handleOnChange}/>
      <button type="submit"> Add Review </button>
      </form>
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
