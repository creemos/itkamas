import {
    profileReducer
} from './profileReducer'
import {
    dialogsReducer
} from './dialogsReducer'

let store = {

    _state: {
        profilePage: {
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
        },

        messagesPage: {
            dialogsData: [{
                    name: 'Misha',
                    id: 1
                },
                {
                    name: 'Sasha',
                    id: 2
                },
                {
                    name: 'Ann',
                    id: 3
                },
                {
                    name: 'Olya',
                    id: 4
                },
                {
                    name: 'Dima',
                    id: 5
                },
                {
                    name: 'Max',
                    id: 6
                }
            ],

            messagesData: [{
                    id: 1,
                    text: 'Hello!'
                },
                {
                    id: 2,
                    text: 'its test string'
                },
                {
                    id: 3,
                    text: 'nobody listen'
                }
            ],

            messageText: 'new message'
        },

        sidebar: {}
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this.rerenderFullTree = observer
    },

    rerenderFullTree() {
        console.log('state changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this.rerenderFullTree(this._state)
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const updateMessageTextActionCreator = (text) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newText: text
    }
}

export default store