let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD-MESSAGE': {
            let newMessage = {
                id: 4,
                text: state.messageText
            }
            state.messagesData.push(newMessage)
            state.messageText = ''
            break
        }

        case 'UPDATE-MESSAGE-TEXT': {
            state.messageText = action.newText
            break
        }

    }
    return state
}