import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addMessageActionCreator } from '../../redux/store'
import { withAuthRedirect } from '../hoc/authRedirect'
import Dialogs from './Dialogs'

type DialogsContainerStateType = {
        messagesPage: {
            dialogsData: Array<any>
            messagesData: Array<any>
            messageText: string
        }
}

const mapStateToProps = (state: DialogsContainerStateType) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessageDAC: (text: string) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

export default compose<React.FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
