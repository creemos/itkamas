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
            state.posts.push(newPost)
            state.newPostText = ''
            break
        }
        case 'UPDATE-POST-TEXT': {
            state.newPostText = action.newText
            break
        }

    }
    return state
}