import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/reducers/root.reducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/saga/auth.saga";
import {createBrowserHistory} from 'history'
import {ConnectedRouter, routerMiddleware} from "connected-react-router";

const saga = createSagaMiddleware()

const history = createBrowserHistory();

const store = createStore(rootReducer(history), compose(
  applyMiddleware(routerMiddleware(history),saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)
const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>

)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
