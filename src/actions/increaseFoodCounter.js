const increaseFoodCounter = itemId => {
  return {
    type: "INCREASE_COUNTER_CART",
    payload: {
      itemId: itemId
    }
  };
};

export default increaseFoodCounter;
