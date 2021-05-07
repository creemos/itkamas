import { stopSubmit } from 'redux-form';
import { authAPI, UserAPI } from './../api/api';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data
            }
        }

        default: {
           return state 
        }
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId, email, login, isAuth
        } 
    }
}

export const getAuth = () => (dispatch) => {
    UserAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {login, id, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const getLogin = (email, password, rememberMe ) => (dispatch) => {
    
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                dispatch(stopSubmit('login', {_error: 'Incorrect login or password!'}))
            }
        })
}

export const delLogin = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                console.log('Success logOut!')
            }
        })
}