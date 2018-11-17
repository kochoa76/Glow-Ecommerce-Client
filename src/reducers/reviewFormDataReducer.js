const initialState = {
  name: '',
  city: 0,
  rating: 0,
  content: ''
}

export default function makeupFormDataReducer(state = initialState, action) {

   switch(action.type) {
     case 'UPDATED_DATA':
      return action.reviewFormData

     case 'RESET_REVIEW_FORM':
      return initialState;

    default:
    return state
  }


}
