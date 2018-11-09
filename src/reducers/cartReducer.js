

function cartReducer(state = 0, action) {
    switch(action.type){
      case "ADD_TO_CART_SUCCESS":
      const Item = action.cart += 1
        return {...state, Item}

      default:
      return state
    }
}
export default cartReducer
