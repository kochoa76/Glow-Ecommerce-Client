

function cartReducer(state = 0, action) {
    switch(action.type){
      case "ADD_TO_CART_SUCCESS":

        return state + 1

      default:
      return state
    }
}
export default cartReducer
