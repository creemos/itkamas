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

export const setAuthUserData = (userId, email, login) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId, email, login
        } 
    }
}