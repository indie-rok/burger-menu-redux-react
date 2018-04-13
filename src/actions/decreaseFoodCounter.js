const decreaseFoodCounter = itemId => {
  return { type: "DECREASE_COUNTER_CART", payload: { itemId: itemId } };
};

export default decreaseFoodCounter;
