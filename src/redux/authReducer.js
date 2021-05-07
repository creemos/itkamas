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
                ...action.data,
                isAuth: true
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

export const getAuth = () => {
    return dispatch => {
        UserAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {login, id, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const getLogin = (email, password, rememberMe ) => {
    return dispatch => {
        authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuth())
            }
        })
    }
}

export const delLogin = () => {
    return dispatch => {
        authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                console.log('Success logOut!')
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}