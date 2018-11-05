import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'



ReactDOM.render(
  <Provider >
  <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
