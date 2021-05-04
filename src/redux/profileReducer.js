import { profileAPI, UserAPI } from './../api/api';

let initialState = {

    posts: [{
            id: 1,
            text: 'first post!',
            likesCount: 22
        },
        {
            id: 2,
            text: 'second post!',
            likesCount: 8
        }
    ],
    newPostText: '',
    profile: null,
    status: ''
}


export const profileReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            newState = {
                ...state,
                posts: [...state.posts, newPost]
            }
            newState.newPostText = ''
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

        default: {
            return state
        }
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET-USER-PROFILE', profile
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET-STATUS', status
    }
}

export const getStatus = (userId = 2) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))  
        })
    }

export const updateStatus = status => dispatch => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))  
                }
            })
        }

export const getUserProfile = (userId) => {
    !userId && ( userId = 2 )
    return dispatch => {
        UserAPI.getProfile(userId)
            .then(response => {
                    dispatch(setUserProfile(response.data))
        })
    }
}