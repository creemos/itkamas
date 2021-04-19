import { rerenderFullTree } from "../render"

let state = {

    profilePage: {
      posts: [
        {id: 1, text: 'first post!', likesCount: 22},
        {id: 2, text: 'second post!', likesCount: 8}
      ]
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
      ]
    }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    text: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderFullTree(state)
}

export default state