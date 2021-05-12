import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/reduxStore'

ReactDOM.render(
    <HashRouter> 
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>, document.getElementById('root'));
  