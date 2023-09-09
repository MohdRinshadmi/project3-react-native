import { AppRegistry } from "react-native";

import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import App from "./src/Navigation/Navigator App";
import { name as appName } from "./app.json";

import itemReducer from "./src/reducer/countReducer";

const rootReducer = combineReducers({
  item: itemReducer
});

const store = createStore(rootReducer);

const RNRedux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);