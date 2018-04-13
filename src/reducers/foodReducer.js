const initialState = {
  items: [
    { id: 33, name: "coca cola", price: 15 },
    { id: 1, name: "hamgurguesa", price: 40 },
    { id: 7, name: "duff", price: 10 }
  ],
  cart: { 33: 4, 1: 0, 7: 0 }
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER_CART": {
      let newState = { items: [...state.items], cart: { ...state.cart } };
      newState.cart[action.payload.itemId] += 1;
      return newState;
    }
    case "DECREASE_COUNTER_CART": {
      let newState = { items: [...state.items], cart: { ...state.cart } };
      newState.cart[action.payload.itemId] -= 1;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default foodReducer;
