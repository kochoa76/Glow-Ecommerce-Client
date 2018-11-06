const initialState = {
  name: '',
  price: 0,
  img_url: '',
  description: ''
}

export default function makeupFormDataReducer(state = initialState, action) {

   switch(action.type) {
     case 'UPDATED_DATA':
      return action.makeupFormData

     case 'RESET_MAKEUP_FORM':
      return initialState;

    default:
    return state
  }


}
