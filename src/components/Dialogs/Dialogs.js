import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <BrowserRouter>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <div className={classes.dialog}>Alex</div>
                    <div className={classes.dialog}>Sasha</div>
                    <div className={classes.dialog}>Ann</div>
                    <div className={classes.dialog}>Ivan</div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Message 1</div>
                    <div className={classes.message}>Message 2</div>
                    <div className={classes.message}>Message 3</div>
                    <div className={classes.message}>Message 4</div>
                </div>
            </div>
        </BrowserRouter>
        
    )
}

export default Dialogs