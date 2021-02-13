import React, { StrictMode } from 'react'

import App from './App'

import store from 'store'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
