import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import React from "react";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/*<Profile />*/}
      <Dialogs />
    </div>
  );
}

export default App;
