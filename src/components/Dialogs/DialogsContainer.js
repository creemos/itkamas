import { connect } from 'react-redux'
import { compose } from 'redux'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/store'
import { withAuthRedirect } from '../hoc/authRedirect'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messageText: state.messagesPage.messageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
