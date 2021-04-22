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
    newPostText: 'new post text'
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = ''
            return newState
        }
        case 'UPDATE-POST-TEXT': {
            let newState = {...state}
            newState.newPostText = action.newText
            return newState
        }

    }
    return state
}