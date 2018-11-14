

function cartReducer(state = { count: 0, item: []}, action) {
    switch(action.type){
      case "ADD_ITEM_TO_CART":
       return {...state, count: state.count + 1, item: state.item.concat(action.makeup)}
      case "REMOVE_ITEM_FROM_CART":
      const itemId = action.makeup.id
        return {...state, count: state.count - 1, item: state.item.filter(item => item.id !== itemId)}
      case "INCREASE_ITEM_COUNT":
        return {...state, count: state.count + 1}
      case "DECREASE_ITEM_COUNT":
        return {...state, count: state.count - 1}
      default:
      return state
    }
}
export default cartReducer
