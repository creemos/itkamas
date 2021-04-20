import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'


let rerenderFullTree = () => {
  ReactDOM.render(
    <App appState={store.getState()} 
    dispatch={store.dispatch.bind(store)} />,
  document.getElementById('root')
);
}

rerenderFullTree()

store.subscribe(rerenderFullTree)