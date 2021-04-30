import { UserAPI } from './../api/api';

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
    profile: null
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

export const getUserProfile = (userId) => {
    return dispatch => {
        !userId && (userId = 2)
        UserAPI.getProfile(userId)
            .then(response => {
                    dispatch(setUserProfile(response.data))
        })
    }
}