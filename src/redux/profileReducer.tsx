import { profileAPI, UserAPI } from '../api/api';

type ProfileType = {
    userId?: number
    aboutMe?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    photos?: Array<{small: string | null, large: string | null}> 
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

let initialState = {
    posts: [
    ] as Array<{id: number, text: string, likesCount: number} | null>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

type InitialStateType = typeof initialState

export const profileReducer = (state: typeof initialState = initialState, action: any): InitialStateType => {
    let newState
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: Math.round(Math.random()*50),
                text: action.text,
                likesCount: 0
            }
            newState = {
                ...state,
                posts: [...state.posts, newPost]
            }
            return newState
        }
        case 'UPDATE-POST-TEXT': {
            newState = {...state}
            newState.newPostText = action.newText
            return newState
        }

        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile }
        }

        case 'SET-STATUS': {
            return {...state, status: action.status}
        }

        case 'SAVE-USERS-PHOTO': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }

        case 'UPDATE-USERS-INFO': {
            return {...state, profile: action.profile}
        }


        default: {
            return state
        }
    }
}

type setUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: Array<any>
}

export const setUserProfile = (profile: Array<any>): setUserProfileActionType => {
    return {
        type: 'SET-USER-PROFILE', profile
    }
}

type setStatusActionType = {
    type: 'SET-STATUS'
    status: string
}

export const setStatus = (status: string): setStatusActionType => {
    return {
        type: 'SET-STATUS', status
    }
}

type savePhotoSuccessActionType = {
    type: 'SAVE-USERS-PHOTO', photos: any
}

export const savePhotoSuccess = (photos: any): savePhotoSuccessActionType => {
    return {
        type: 'SAVE-USERS-PHOTO', photos
    }
}


export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))  
        })
    }



export const updateStatus = (status: string) => (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))  
                }
            })
        }
        
export const savePhoto = (file: any) => (dispatch: any) => {
        profileAPI.saveUsersPhoto(file)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(savePhotoSuccess(response.data.data.photos))
                }
            })
        }

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        UserAPI.getProfile(userId)
            .then(response => {
                    dispatch(setUserProfile(response.data))
        })
    }
}

export const updateUsersProfile = (data: any) => (dispatch: any) => {
    profileAPI.updateProfile(data)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(data.userId))
            }
        }
    )
}