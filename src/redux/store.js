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

        switch (action.type) {
            case 'ADD-POST': {
                let newPost = {
                    id: 5,
                    text: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this.rerenderFullTree(this._state)
                break
            }
            case 'UPDATE-POST-TEXT': {
                this._state.profilePage.newPostText = action.newText
                this.rerenderFullTree(this._state)
                break
            }
            case 'ADD-MESSAGE': {
                let newMessage = {
                    id: 4,
                    text: this._state.messagesPage.messageText
                }
                this._state.messagesPage.messagesData.push(newMessage)
                this._state.messagesPage.messageText = ''
                this.rerenderFullTree(this._state)
                break
            }

            case 'UPDATE-MESSAGE-TEXT': {
                this._state.messagesPage.messageText = action.newText
                this.rerenderFullTree(this._state)
                break
            }

        }
    }
}

export default store