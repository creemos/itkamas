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
    newPostText: ''
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
        default: {
            return state
        }
    }
}