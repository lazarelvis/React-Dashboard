import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../src/reducer';

window.__APP_STATE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = window.__APP_STATE__;

const store = createStore(
  reducers,
  initialState(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
