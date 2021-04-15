import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import React from "react";
import { Route, BrowserRouter, Router, Redirect } from 'react-router-dom';
import MainSettings from './components/MainSettings/MainSettings';
import Music from './components/Music/Music';
import News from './components/News/News';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={MainSettings} />
        <Route path='/music' component={Music} />
        <Redirect from='/' to='/profile' />
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
