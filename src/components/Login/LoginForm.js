import {Field, reduxForm} from 'redux-form'

let LoginForm = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='email' component='input' placeholder='E-mail'/>
            </div>
            <div>
                <Field name='password' component='input' placeholder='Password'/>
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox'/>Remember me
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)


export default LoginForm