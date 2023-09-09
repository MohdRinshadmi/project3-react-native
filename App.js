import React from 'react'
import NavigatorApp from './src/Navigation/Navigator App'
import { Provider } from 'react-redux'
import store from './src/redux/Store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigatorApp/>
    </Provider>
  )
}