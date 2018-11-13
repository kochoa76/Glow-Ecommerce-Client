



export const addItemToCart = makeup => {
  console.log(makeup)
  return {
    type: "ADD_ITEM_TO_CART",
    makeup
  }
}

export const removeItemFromCart = makeup => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    makeup

  }
}
