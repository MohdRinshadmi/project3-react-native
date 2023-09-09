import { createStore, combineReducers } from "redux";
import itemReducer from "../src/reducer/countReducer";

const rootReducer = combineReducers({
  cartItems: itemReducer 
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;