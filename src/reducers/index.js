import { combineReducers } from 'redux';
import makeupReducer from './makeupReducer'
import cartReducer from './cartReducer'
import reviewsReducer from './reviewsReducer'
import reviewFormDataReducer from './reviewFormDataReducer'

export default combineReducers({
  makeup: makeupReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
  reviewFormData: reviewFormDataReducer
})
