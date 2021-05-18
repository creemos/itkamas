import { stopSubmit } from 'redux-form';
import { authAPI, UserAPI } from '../api/api';

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isLoading: boolean 
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
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

type setAuthUserDataActionType = {
    type: 'SET-USER-DATA'
    data: setAuthUserDataActionDataType
}

type setAuthUserDataActionDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): setAuthUserDataActionType => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId, email, login, isAuth
        } 
    }
}

export const getAuth = () => (dispatch: any) => UserAPI.auth()
    .then((response: any) => {
        if (response.data.resultCode === 0) {
            let { login, id, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })

export const getLogin = (email: string | null, password: string | null, rememberMe: boolean) => (dispatch: any) => {
    
    authAPI.login(email, password, rememberMe)
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                dispatch(stopSubmit('login', {_error: 'Incorrect login or password!'}))
            }
        })
}

export const delLogin = () => (dispatch: any) => {
    authAPI.logout()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                console.log('Success logOut!')
            }
        })
}