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

    messageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD-MESSAGE': {
            let newMessage = {
                id: 4,
                text: state.messageText
            }
            let newState = {...state}
            newState.messagesData = [...state.messagesData]
            newState.messagesData.push(newMessage)
            newState.messageText = ''
            return newState
        }

        case 'UPDATE-MESSAGE-TEXT': {
            let newState = {...state}
            newState.messageText = action.newText
            return newState
        }

    }
    return state
}