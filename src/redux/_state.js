let rerenderFullTree = () => {
  console.log('state changed')
}


let state = {

    profilePage: {
      posts: [
        {id: 1, text: 'first post!', likesCount: 22},
        {id: 2, text: 'second post!', likesCount: 8}
      ],
      newPostText: 'new post text'
    },

    messagesPage: {
      dialogsData: [
        { name: 'Misha', id: 1 }, 
        { name: 'Sasha', id: 2 }, 
        { name: 'Ann', id: 3 }, 
        { name: 'Olya', id: 4 }, 
        { name: 'Dima', id: 5 },
        { name: 'Max', id: 6 } 
      ],
      
      messagesData: [
          { id: 1, text: 'Hello!'},
          { id: 2, text: 'its test string'},
          { id: 3, text: 'nobody listen'}
        ],

      messageText: 'new message'
      }
}

export let addPost = () => {
  let newPost = {
    id: 5,
    text: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderFullTree(state)
}

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderFullTree(state)
}

export let addMessage = () => {
  let newMessage = {
    id: 4,
    text: state.messagesPage.messageText
  }
  state.messagesPage.messagesData.push(newMessage)
  state.messagesPage.messageText = ''
  rerenderFullTree(state)
}

export let updateMessageText = (newText) => {
  state.messagesPage.messageText = newText
  rerenderFullTree(state)
}

export const subscribe = (observer) => {
  rerenderFullTree = observer
}

export default state