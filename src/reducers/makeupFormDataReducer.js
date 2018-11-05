export default function makeupFormDataReducer(state = {
  name: '',
  price: 0,
  img_url: '',
  description: ''
 }, action) {

   switch(action.type) {
     case 'UPDATED_DATA':
      return action.makeupFormData

    default:
    return state
  }


}
