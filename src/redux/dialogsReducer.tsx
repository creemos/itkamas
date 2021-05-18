type InitialStateType = {
    dialogsData: Array<{name: string, id: number}>
    messagesData: Array<{id: number, text: string}>
    messageText: string
}


let initialState: InitialStateType = {
    dialogsData: [{
            name: 'Misha',
            id: 1
        },
        {
            name: 'Sasha',
            id: 2
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

export const dialogsReducer = (state: typeof initialState = initialState, action: any): InitialStateType => {
    let newState
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {
                id: Math.round(Math.random()*50),
                text: action.text
            }
            newState = {
                ...state,
                messagesData: [...state.messagesData, newMessage] 
            }
            return newState
        }

        case 'UPDATE-MESSAGE-TEXT': {
            let newState = {...state}
            newState.messageText = action.newText
            return newState
        }
        default: {
           return state 
        }
    }
}