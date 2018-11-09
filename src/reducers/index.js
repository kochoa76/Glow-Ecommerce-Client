import { combineReducers } from 'redux';
import makeupReducer from './makeupReducer'
import makeupFormDataReducer from './makeupFormDataReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  makeup: makeupReducer,
  makeupFormData: makeupFormDataReducer,
  cart: cartReducer
})
