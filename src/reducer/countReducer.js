export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    default:
      return state;
  }
};

export default itemReducer;