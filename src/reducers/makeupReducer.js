function makeupReducer(state=[], action) {
  switch(action.type) {
    case 'GET_MAKEUP_SUCCESS':
      return action.makeup
    case "CREATE_MAKEUP_SUCCESS":
      return state.concat(action.makeup)
    case "DELETE_MAKEUP_SUCCESS":
      const makeup = state.makeup.filter(makeup => makeup.id !== action.makeup.id);
      return {...state, makeup}

    default:
    return state;
  }
}
export default makeupReducer
