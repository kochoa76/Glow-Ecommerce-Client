



export const addItemToCart = (makeup) => {
  return {
    type: "ADD_ITEM_TO_CART",
    makeup: {id: makeup.id, name: makeup.name, price: makeup.price, img_url: makeup.img_url, description: makeup.description, quantity: makeup.quantity}
  }
}


export const removeItemFromCart = makeup => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    makeup

  }
}

export const increaseItemCount = makeup => {
  return {
    type: "INCREASE_ITEM_COUNT",
    makeup
  }
}

export const decreaseItemCount = makeup => {
    return {
      type: "DECREASE_ITEM_COUNT",
      makeup
    }
}
