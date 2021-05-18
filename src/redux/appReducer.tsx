import { getAuth } from './authReducer';


type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
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

type SuccessInitActionType = {
    type: 'SUCCESS_INIT'
}

export const successInit = (): SuccessInitActionType => {
    return {
        type: 'SUCCESS_INIT'
    }
}

export const successInitApp = () => (dispatch: any )=> {
    let promise = dispatch(getAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(successInit())
        })
}
