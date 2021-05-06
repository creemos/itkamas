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
            ]
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

export const addPostActionCreator = (text) => {
    return {
        type: 'ADD-POST',
        id: Math.round(Math.random(1000)*50),
        text
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: 'ADD-MESSAGE',
        id: Math.round(Math.random(1000)*50),
        text
    }
}


export default store