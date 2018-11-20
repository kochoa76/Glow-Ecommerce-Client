function reviewsReducer( state =[], action) {
  switch (action.type) {
    case "GET_REVIEWS_SUCCESS":
      return action.reviews
    case "CREATE_REVIEW_SUCCESS":
        return state.concat(action.review)
      // case "DELETE_REVIEW_SUCCESS":
      //   const review = state.filter(review => review.id !== action.review.id);
      //   return {...state, review}
    default:
    return state
  }
}
export default reviewsReducer
