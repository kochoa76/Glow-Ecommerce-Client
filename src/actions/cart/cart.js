



export const addItemToCart = makeup => {
  console.log(makeup)
  return {
    type: "ADD_ITEM_TO_CART",
    makeup
  }
}
