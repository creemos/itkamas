import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'


let rerenderFullTree = (state) => {
  ReactDOM.render(
    <App appState={store}/>,
  document.getElementById('root')
);
}

rerenderFullTree()

store.subscribe(rerenderFullTree)