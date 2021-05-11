import { getAuth } from './authReducer';

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_INIT': {
            return {
                ...state,
                initialized: true
            }
        }

        default: {
           return state 
        }
    }
}

export const successInit = () => {
    return {
        type: 'SUCCESS_INIT'
    }
}

export const successInitApp = () => dispatch => {
    let promise = dispatch(getAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(successInit())
        })
}
