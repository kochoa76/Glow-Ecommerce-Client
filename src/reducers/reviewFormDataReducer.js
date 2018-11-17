const initialState = {
  makeup_id: 0,
  name: '',
  city: '',
  rating: 0,
  content: ''
}

function reviewFormDataReducer(state = initialState, action) {

   switch(action.type) {
     case 'UPDATED_REVIEW_DATA':
      return action.reviewFormData
     case 'RESET_REVIEW_FORM':
      return initialState;

    default:
    return state
  }


}
export default reviewFormDataReducer
