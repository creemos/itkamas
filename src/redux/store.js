let store = {

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

    rerenderFullTree () {
        console.log('state changed')
      },

    addPost () {
        let newPost = {
            id: 5,
            text: store.profilePage.newPostText,
            likesCount: 0
        }
        store.profilePage.posts.push(newPost)
        store.profilePage.newPostText = ''
        store.rerenderFullTree(store)
    },

    updatePostText (newText)  {
        store.profilePage.newPostText = newText
        store.rerenderFullTree(store)
    },
    addMessage() {
        let newMessage = {
            id: 4,
            text: this.messagesPage.messageText
        }
        store.messagesPage.messagesData.push(newMessage)
        store.messagesPage.messageText = ''
        store.rerenderFullTree(store)
    },

    updateMessageText(newText) {
        store.messagesPage.messageText = newText
        store.rerenderFullTree(store)
    },

    subscribe(observer) {
        store.rerenderFullTree = observer
    }

}

export default store