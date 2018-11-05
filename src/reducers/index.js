import { combineReducers } from 'redux';
import makeupReducer from './makeupReducer'
import makeupFormDataReducer from './makeupFormDataReducer'
export default combineReducers({
  makeup: makeupReducer,
  makeupFormData: makeupFormDataReducer
})
