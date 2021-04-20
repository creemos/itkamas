export const profileReducer = (state, action) => {
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