import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from "react";
import { Route } from 'react-router-dom';
import MainSettings from './components/MainSettings/MainSettings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import { compose } from 'redux'
import { successInitApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader';

interface AppInterface {
    successInitApp: () => void
    initialized: boolean
}

class App extends React.Component<AppInterface> {

    componentDidMount() {
        this.props.successInitApp()
    }

    render() {

            if (!this.props.initialized) {
                return <Preloader />
            }

            return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' component={() => <ProfileContainer/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/settings' component={() => <MainSettings/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/users' component={() => <UsersContainer/>}/>
                    <Route path='/login' component={() => <Login />}/>
                </div>
            </div>
        );
    }
    
}

type AppMSTPType = {
    app: {
        initialized: boolean
    }
}

const mapStateToProps = (state: AppMSTPType) => ({
    initialized: state.app.initialized
})

export default compose<React.FC>(
    withRouter,
    connect(mapStateToProps, {successInitApp}))(App);
