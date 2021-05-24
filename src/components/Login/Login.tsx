import React from "react";
import { getLogin } from "../../redux/authReducer";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router"
import { AppStateType } from "../../redux/reduxStore";

type LoginPropsType = {
  isAuth: boolean;
  getLogin: (email: string, password: string, rememberMe: boolean) => void;
};

const Login: React.FC<LoginPropsType> = (props) => {
  const submit = ({ email, password, rememberMe }: any) => {
    props.getLogin(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login </h1>
      <LoginForm onSubmit={submit} />
    </div>
  );
};


const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getLogin })(Login);
