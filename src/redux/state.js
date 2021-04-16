
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
      ],
      
    messagesData: [
        { id: 1, text: 'Hello!'},
        { id: 2, text: 'its test string'},
        { id: 3, text: 'nobody listen'}
      ]
    }
}

export default state