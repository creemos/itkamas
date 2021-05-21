import { Redirect } from "react-router";
import React from "react";
import { connect } from "react-redux";

export const withAuthRedirect = (
  Component: new () => React.Component<any, any>
) => {
  class RedirectComponent extends React.Component<{ isAuth: boolean }> {
    render() {
      if (this.props.isAuth === false) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} isAuth={this.props.isAuth} />;
    }
  }

  const mapStateToProps = (state: any) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  let withIsAuthStateComponent = connect(mapStateToProps)(RedirectComponent);

  return withIsAuthStateComponent;
};
