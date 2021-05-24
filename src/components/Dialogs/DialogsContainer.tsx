import React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { AppStateType } from '../../redux/reduxStore'
import { AddMessageActionCreatorType, addMessageActionCreator } from '../../redux/store'
import { withAuthRedirect } from '../hoc/authRedirect'
import Dialogs from './Dialogs'


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddMessageActionCreatorType>) => {
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
