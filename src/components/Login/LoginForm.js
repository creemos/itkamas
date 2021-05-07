import {Field, reduxForm} from 'redux-form'
import { Input } from '../Common/FormControls/FormControls'
import { requiredField, minLengthValidatorCreator } from './../../Utils/Validators/Validators';
import classes from './Login.module.css'

let minLength8 = minLengthValidatorCreator(8)

let LoginForm = (props) => {
    const {handleSubmit} = props
    debugger

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field  
                    name='email' 
                    component={Input} 
                    validate={[requiredField]}
                    placeholder={'E-mail'}/>
            </div>
            <div>
                <Field 
                    name='password'
                    type='password' 
                    component={Input} 
                    validate={[requiredField, minLength8]}
                    placeholder={'Password'}/>
            </div>
            <div>
                <Field 
                    name='rememberMe' 
                    component={Input} 
                    type={'checkbox'}/>
                RememberMe
            </div>
            {props.error && <div className={classes.loginError}>{props.error}</div>}
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)


export default LoginForm