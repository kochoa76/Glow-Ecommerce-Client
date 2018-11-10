

function cartReducer(state = {count: 0, item: []}, action) {
    switch(action.type){
      case "ADD_ITEM_TO_CART":
      const item = {makeup: action.makeup}
        return {...state, count: state.count + 1, item: state.item.concat(item)}
      default:
      return state
    }
}
export default cartReducer
