import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { delLogin } from "../../redux/authReducer";

interface HeaderContainerType {
  isAuth: boolean;
  id: number;
  login: string;
  delLogin: () => void;
}

class HeaderContainer extends React.Component<HeaderContainerType> {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        delLogin={this.props.delLogin}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id,
  login: state.auth.login,
});

const mapDispatchToProps = {
  delLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
