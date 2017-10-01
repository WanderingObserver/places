import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import routes from './routes'
import { Router, browserHistory } from 'react-router'

const store = createStore( rootReducer, applyMiddleware( promiseMiddleware ) )

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
