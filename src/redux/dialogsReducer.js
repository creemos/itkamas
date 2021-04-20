export const dialogsReducer = (state, action) => {
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