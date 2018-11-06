function makeupReducer(state=[], action) {
  switch(action.type) {
    case 'GET_MAKEUP_SUCCESS':
      return action.makeup
    case "CREATE_MAKEUP_SUCCESS":
      return state.concat(action.makeup)
      
    default:
    return state;
  }
}
export default makeupReducer
