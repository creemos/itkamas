import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import React from "react";
import { Route } from 'react-router-dom';
import MainSettings from './components/MainSettings/MainSettings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' component={() => <DialogsContainer />} />
        <Route path='/profile' component={() => <ProfileContainer />} />
        <Route path='/news' component={() => <News />} />
        <Route path='/settings' component={() => <MainSettings />} />
        <Route path='/music' component={() => <Music />} />
        <Route path='/users' component={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
